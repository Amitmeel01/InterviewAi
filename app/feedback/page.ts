"use server";
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '@/lib/db';
import interviewModel from '@/lib/modals/interview.modal';
import UserAnswerModel from '@/lib/modals/UserAnswer.modal';
import { NextResponse } from 'next/server';

export default async function feedbackHandler(interviewId:any) {

    console.log(interviewId)


    await connectDb();

    try {
        const interview:any = await UserAnswerModel.find({mockIdRef:interviewId});
        console.log(interview);

        return {interview};
    } catch (err:any) {
        // res.status(500).json({ error: err.message });
    }
}