"use client";

import { handler } from "@/app/interview/[interviewId]/page";
import Question from "@/components/shared/Question";
import RecordAnswer from "@/components/shared/RecordAnswer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";

type StartInterviewProps = {
  params: { interviewId: string };
};

const StartInterview: React.FC<StartInterviewProps> = ({ params: { interviewId } }) => {
  const [interviewData, setInterviewData] = useState<any>(null);
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState<any>(null);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const router = useRouter();

  const getData = useCallback(async () => {
    try {
      const result = await handler(interviewId);
      console.log("Handler result:", result);
      if (result && result.interview && result.interview.length > 0) {
        const interviewData = JSON.parse(result.interview[0].jsonMockRes);
        setMockInterviewQuestion(interviewData);
        setInterviewData(result.interview[0]);
      } else {
        console.log("Interview not found");
      }
    } catch (err) {
      console.log(err);
    }
  }, [interviewId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-16 sm:gap-8">
        <Question mockInterviewQuestion={mockInterviewQuestion} activeQuestion={activeQuestion} />
        <RecordAnswer mockInterviewQuestion={mockInterviewQuestion} activeQuestion={activeQuestion} interviewData={interviewData} />
      </div>

      <div className="flex justify-end gap-5 pb-8 pt-8">
        {activeQuestion > 0 && (
          <Button className="bg-blue-600" onClick={() => setActiveQuestion(activeQuestion - 1)}>
            Prev Question
          </Button>
        )}
        {activeQuestion < Number(process.env.NEXT_PUBLIC_INTERVIEW_QUESTION) - 1 && (
          <Button className="bg-blue-600" onClick={() => setActiveQuestion(activeQuestion + 1)}>
            Next Question
          </Button>
        )}
        {activeQuestion === mockInterviewQuestion?.length - 1 && (
          <Link href={`/dashbord/interview/${interviewData?.mockId}/feedback`}>
            <Button className="bg-blue-600">End Interview</Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default StartInterview;
