// components/shared/Question.tsx
import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

interface QuestionProps {
  mockInterviewQuestion: any;
  activeQuestion: number;
}

const Question: React.FC<QuestionProps> = ({ mockInterviewQuestion, activeQuestion }) => {

  // for question speaking
  const textToSpeech = async (text: string) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, your browser does not support this!');
    }
  }

  return (
    <div className="p-5 border rounded-lg my-10">
      {mockInterviewQuestion ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 max-sm:grid-cols-1">
            {mockInterviewQuestion.map((question: any, index: number) => (
              <div key={index} className="mt-8">
                <h3
                  className={`rounded-full p-2 text-center cursor-pointer ${activeQuestion === index ? 'bg-blue-600 text-white' : 'bg-secondary'}`}
                >
                  Question-{index + 1}
                </h3>
              </div>
            ))}
          </div>
          <h3 className="text-black font-bold my-5">{mockInterviewQuestion[activeQuestion]?.question}</h3>
          <Volume2 
            onClick={() => textToSpeech(mockInterviewQuestion[activeQuestion]?.question)} 
            className="cursor-pointer" 
          />
        </>
      ) : (
        <p>No interview questions available.</p>
      )}
      <div className="border rounded-lg p-5 bg-blue-100 mt-10">
        <h2 className="flex gap-2 items-center text-blue-700">
          <Lightbulb /> 
          <strong> Note:</strong> <hr />
        </h2>
        <h2 className="my-2 text-blue-700 text-sm">{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
      </div>
    </div>
  );
};

export default Question;
