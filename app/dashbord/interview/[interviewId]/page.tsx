"use client";

import { Button } from "@/components/ui/button";
import { Ghost, WebcamIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import Webcam from "react-webcam";

function InterviewId({ params: { interviewId } }: any) {
  const [interview, setInterview] = useState<any>(null);
  const [webCam, setWebCam] = useState(false);

  const router = useRouter();

  const getData = useCallback(async () => {
    try {
      const response = await fetch(`/api/interview/${interviewId}/page`);
      const result = await response.json();

      if (response.ok && result) {
        setInterview(result);
      } else {
        console.log("Interview not found");
      }
    } catch (err) {
      console.log(err);
    }
  }, [interviewId]);

  useEffect(() => {
    getData();
  }, [interviewId, getData]);

  return (
    <>
      <h2 className="font-bold text-3xl text-center mt-8">Let&apos;s Get Started</h2>
      <div className="my-10 flex justify-center items-center lg:gap-64 md:gap-32 sm:gap-16 max-sm:flex-col max-sm:gap-16">
        <div>
          {interview && (
            <div className="flex flex-col my-5 gap-5 border p-5">
              <div>
                <strong>Job Role/Position:</strong> {interview.jobPosition || "N/A"}
              </div>
              <div>
                <strong>Job Description/Tech-Stack:</strong> {interview.jobDes || "N/A"}
              </div>
              <div>
                <strong>Year Of Experience:</strong> {interview.Experince || "N/A"}
              </div>
              {/* Display more properties of the interview as needed */}
            </div>
          )}
        </div>
        <div>
          {webCam ? (
            <>
              <Webcam
                onUserMedia={() => setWebCam(true)}
                onUserMediaError={() => setWebCam(false)}
                style={{
                  height: 300,
                  width: 300,
                }}
                mirrored={true}
              />
              <Button onClick={() => setWebCam(false)}>Close</Button>
            </>
          ) : (
            <>
              <WebcamIcon className="h-64 w-64 p-10 bg-secondary mt-10 rounded-full mb-8" />
              <Button onClick={() => setWebCam(true)} variant='ghost' className="hover:bg-black hover:text-white border">
                Enable Webcam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <Button className="bg-purple-600 mb-8 px-16 text-center lg:ml-[700px] md:ml-[300px] sm:ml-[300px] max-sm:ml-[170px] max-sm:mt-4 max-sm:ml-[100px] hover:bg-blue-700" onClick={() => router.push(`/dashbord/interview/${interview.mockId}/start`)}>Start</Button>
    </>
  );
}

export default InterviewId;
