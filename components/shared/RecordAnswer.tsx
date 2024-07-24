import React, { useEffect, useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { Button } from '../ui/button';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { chatSession } from '@/lib/GeminiAi';
import { addUserAnswer } from '@/lib/actions/userAnswer.action';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';

type SpeechResult = {
  transcript: string;
  timestamp: number;
};

interface QuestionProps {
  mockInterviewQuestion: any;
  activeQuestion: number;
  interviewData: any;
}

function RecordAnswer({ mockInterviewQuestion, activeQuestion, interviewData }: QuestionProps) {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [newData, setNewData] = useState<any>(null);

  const {
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
    error: speechError,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  const interimTranscriptRef = useRef('');
  console.log(interviewData);

  useEffect(() => {
    if (Array.isArray(results) && results.length > 0) {
      const interimTranscript = results.map(result => {
        if (typeof result === 'string') {
          return result;
        } else {
          return result.transcript;
        }
      }).join(' ');

      interimTranscriptRef.current = interimTranscript;
      console.log('Interim Transcript:', interimTranscript);
    }
  }, [results]);

  useEffect(() => {
    if (!isRecording && interimTranscriptRef.current) {
      setLoading(true);

      // Set the userAnswer state to the current interimTranscript
      setUserAnswer(interimTranscriptRef.current);

      // Construct feedbackPrompt using userAnswer from state
      const feedbackPrompt = `
You are an interview evaluator. Given the following interview question and the user's answer, please provide a comprehensive evaluation. Your evaluation should include:

1. A rating out of 10 for the user's answer.
2. Constructive feedback highlighting the strengths and areas for improvement.

Format your response in JSON with the keys "rating" and "feedback" and just write in a paragraph form if use any key points then dont use '*' just write numbers of key points and in other case just write in paragraph form.

Question: "${mockInterviewQuestion[activeQuestion]?.question}"
User Answer: "${interimTranscriptRef.current}"
`.trim();

      chatSession.sendMessage(feedbackPrompt).then(async (result: any) => {
        try {
          const resText = await result.response.text();
          const cleanedText = resText.replace(/```json/g, '').replace(/```/g, '').trim();

          // Log the cleanedText to inspect it
          console.log('Cleaned Text:', cleanedText);

          const jsonResponse = JSON.parse(cleanedText);

          console.log(jsonResponse);

          const newDataResponse = await addUserAnswer({
            mockIdRef: interviewData.mockId,
            question: mockInterviewQuestion[activeQuestion]?.question,
            correctAnswer: mockInterviewQuestion[activeQuestion]?.answer,
            rating: jsonResponse.rating,
            userAns: interimTranscriptRef.current,
            feedback: jsonResponse.feedback,
            userEmail: user?.primaryEmailAddress?.emailAddress,
          });

          setNewData(newDataResponse);
          console.log(newDataResponse);

          if (newDataResponse) {
            toast.success("Answer recorded successfully!");
            setResults([]);
          }

          setLoading(false);
        } catch (error: any) {
          toast.error("Error while processing feedback. Please try again.");
          console.error('Error parsing response:', error);
          // console.error('Response text:', resText);
          setLoading(false);
          setResults([]);
        }
      }).catch((error: any) => {
        toast.error("Error while fetching feedback. Please try again.");
        console.error(error);
        setLoading(false);
        setResults([]);
      });
    }
  }, [isRecording]);

  const handleRecording = async () => {
    try {
      if (isRecording) {
        stopSpeechToText();
      } else {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        startSpeechToText();
      }
    } catch (error) {
      toast.error("Failed to start recording. Please check your microphone permissions.");
      console.error("Error starting recording:", error);
    }
  };

  useEffect(() => {
    if (speechError) {
      toast.error("Error with speech recognition. Please try again.");
      console.error("Speech recognition error:", speechError);
    }
  }, [speechError]);

  return (
    <div className='flex items-center justify-center flex-col'>
      <ToastContainer />
      <div className='flex flex-col justify-center items-center p-5 rounded-lg my-20 bg-black'>
        <Image
          src='/images/cam.jpg'
          alt='cam-image'
          width={200}
          height={200}
          className='absolute'
        />
        <Webcam mirrored={true} style={{
          width: "100%",
          height: 350,
          zIndex: 10,
        }} />
      </div>
      <Button disabled={loading} variant='outline' className='hover:bg-blue-600 hover:text-white my-5' onClick={handleRecording}>
        {isRecording ? <h2 className='text-red-600 flex gap-2'> <Mic /> Stop Recording </h2> : 'Record Answer'}
      </Button>
    </div>
  );
}

export default RecordAnswer;
