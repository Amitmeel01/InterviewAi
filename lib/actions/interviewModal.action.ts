"use server";

import { NextResponse } from "next/server";
import connectDb from "../db";
import interviewModel from "../modals/interview.modal";
import userModel from "../modals/user.modal";
import { EmailAddress } from "@clerk/nextjs/server";


export async function addData({
  mockId,
  jobPosition,
  Experince,
  jobDes,
  jsonMockRes,
  createdBy,
//   createdAt
}:any) {
  try {
    await connectDb();

    // Fetch user by email to get the ObjectId
    const user = await userModel.findOne({ email: createdBy });
    console.log(user)
    if (!user) {
      throw new Error("User not found");
    }

    const newInterview = await interviewModel.create({
      mockId,
      jobPosition,
      Experince,
      jobDes,
      jsonMockRes,
      createdBy: user._id, // Use ObjectId here
    //   createdAt,
     
    });

    

    

    // Return a plain object, not a Mongoose document
    return {newInterview}
   
  } catch (err:any) {
    console.log(err);
    return {
      error: err.message,
    };
  }
}
