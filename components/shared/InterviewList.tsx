"use client";
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import InterviewCard from './InterviewCard';

function InterviewList() {
    const [interviewList, setInterviewList] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const { user }:any = useUser();

    useEffect(() => {
        if (user) {
            setUserEmail(user?.primaryEmailAddress?.emailAddress);
        }
    }, [user]);

    useEffect(() => {
        async function getInterviews() {
            if (!userEmail) return;

            try {
                const response = await fetch(`/api/interviews/page?email=${userEmail}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const interviews = await response.json();
                setInterviewList(interviews);
            } catch (error) {
                console.error('Error fetching interview list:', error);
            } finally {
                setLoading(false);
            }
        }

        getInterviews();
    }, [userEmail]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className='font-medium text-lg mt-8 py-4'>Previous Mock Interviews:</h2>
            {interviewList.length === 0 ? (
                <div>No interviews found.</div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {interviewList?.map((item: any, index: number) => (
                        <InterviewCard interviewList={item} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default InterviewList;
