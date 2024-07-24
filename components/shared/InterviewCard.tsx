"use client";
import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

function InterviewCard({ interviewList }: any) {
  console.log(interviewList);

  const options:any = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  };
  const formattedDateTime = new Date(interviewList?.createdAt).toLocaleString('en-US', options);
  const router=useRouter();

  return (
    <div className='border shadow-sm rounded-lg p-3 flex flex-col gap-2'>
      <h2 className='font-bold text-blue-500'>{interviewList?.jobPosition.toUpperCase()}</h2>
      <h2 className='text-zinc-500'>{interviewList?.Experince} Years of Experience</h2>
      <h2 className='text-sm text-zinc-500'>Created At: {formattedDateTime}</h2>
      <div className='flex justify-between mt-4'>
        <Button className='bg-yellow-500 text-white' onClick={()=>{router.push(`/dashbord/interview/${interviewList?.mockId}/feedback`)}}>Feedback</Button>
        <Button className='bg-green-500 text-white' onClick={()=>{router.push(`/dashbord/interview/${interviewList?.mockId}`)}}>Restart</Button>
      </div>
    </div>
  );
}

export default InterviewCard;
