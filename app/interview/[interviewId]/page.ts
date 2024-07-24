"use server";
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '@/lib/db';
import interviewModel from '@/lib/modals/interview.modal';
import UserModel from '@/lib/modals/user.modal';

export  async function handler(interviewId:any) {
   
    

    await connectDb();

    try {
        const interview = await interviewModel.find({mockId:interviewId});
        console.log(interview);
        if (!interview) {
            // return res.status(404).json({ error: 'Interview not found' });
        }
        // res.status(200).json(interview);
        return {interview}
    } catch (err:any) {
        // res.status(500).json({ error: err.message });
    }
}



export  async function AllInterviewList(email:any) {
   console.log(email)
    

    await connectDb();

    try {

const user=await UserModel.findOne({email});
console.log(user)


        const interview = await interviewModel.find({createdBy:user._id});
        console.log(interview.length);
        if (!interview) {
            return ;
        }
        // res.status(200).json(interview);
        return {interview}
    } catch (err:any) {
        // res.status(500).json({ error: err.message });
    }
}
