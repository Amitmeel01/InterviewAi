"use client";
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD

=======
>>>>>>> ef155c9dbed9339f28ac8b35f00c3e2fc43a8808
import Link from 'next/link';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import feedbackHandler from '@/app/api/feedback/route';

function Feedback({ params: { interviewId } }: any) {
    const [feedbackData, setFeedbackData] = useState<any[]>([]);
    const [overallRating, setOverallRating] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFeedback() {
            try {
                const response = await fetch(`/api/feedback?interviewId=${interviewId}`);
                const data = await response.json();
                console.log(data);
                setFeedbackData(data.interview);
                
                // Compute overall rating
                const totalRating = data.interview.reduce((acc: number, item: any) => acc + item.rating, 0);
                const avgRating = totalRating / data.interview.length;
                setOverallRating(avgRating);
            } catch (error) {
                console.error('Error fetching feedback data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchFeedback();
    }, [interviewId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!feedbackData.length) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-8 bg-gray-100 mt-32">
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">No Feedback Available</h2>
                    <p className="text-gray-500 mb-8">Please give an interview first to receive feedback for this role.</p>
                    <Link href="/dashbord">
                        <Button className="bg-blue-600 text-white mt-4 px-6 py-3 rounded-lg">Go Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="p-10 bg-gray-50 min-h-screen flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-green-500 mb-4">Congratulations🎉🥳</h2>
                <h2 className="text-2xl font-bold mb-4">Here is Your Interview Feedback</h2>
                <h2 className="text-purple-500 text-lg my-3 font-bold">Your Overall Interview Rating: {overallRating?.toFixed(0)}/10</h2>
                <h2 className="text-md text-zinc-600 mb-6">Find below interview questions with correct answers, your answers, and feedback for improvement.</h2>

                {feedbackData.map((item: any, index: any) => (
                    <Collapsible key={index} className="mb-4">
                        <CollapsibleTrigger className="p-4 bg-blue-100 rounded-lg flex justify-between items-center">
                            <span>{item.question}</span>
                            <ChevronsUpDown className="h-5 w-5 text-blue-600"/>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-white border-t border-gray-200">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-yellow-600 font-bold p-2 border rounded-lg">Rating: {item.rating}</h2>
                                <h2 className="text-red-600 font-bold p-2 border rounded-lg bg-red-100 text-sm">Your Answer: {item.userAns}</h2>
                                <h2 className="text-green-600 font-bold p-2 border rounded-lg bg-green-100 text-sm">Correct Answer: {item.correctAnswer}</h2>
                                <h2 className="text-yellow-600 font-bold p-2 border rounded-lg bg-yellow-100 text-sm">Feedback: {item.feedback}</h2>
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                ))}

                <div className="mt-8 flex justify-center">
                    <Link href="/dashbord">
                        <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Go Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
