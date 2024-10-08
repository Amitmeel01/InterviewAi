"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Question from "@/components/shared/Question";
import RecordAnswer from "@/components/shared/RecordAnswer";

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
      const response = await fetch(`/api/interview/${interviewId}/page`);
      const result = await response.json();

      if (response.ok && result) {
        const interviewData = JSON.parse(result.jsonMockRes);
        setMockInterviewQuestion(interviewData);
        setInterviewData(result);
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
        {activeQuestion < (mockInterviewQuestion?.length || 0) - 1 && (
          <Button className="bg-blue-600" onClick={() => setActiveQuestion(activeQuestion + 1)}>
            Next Question
          </Button>
        )}
        {activeQuestion === (mockInterviewQuestion?.length || 0) - 1 && (
          <Link href={`/dashbord/interview/${interviewData?.mockId}/feedback`}>
            <Button className="bg-blue-600">End Interview</Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default StartInterview;
