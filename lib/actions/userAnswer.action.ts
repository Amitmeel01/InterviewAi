// userAnswer.action.ts
"use server"
import mongoose from 'mongoose';
import connectDb from '../db';
import userModel from '../modals/user.modal';
import UserAnswerModel from '../modals/UserAnswer.modal';
import { Types } from "mongoose";

// Function to convert UUID to ObjectId
function convertUUIDToObjectId(uuid: string): mongoose.Types.ObjectId {
  const hex = uuid.replace(/-/g, '');
  const buffer = Buffer.from(hex, 'hex');
  return new mongoose.Types.ObjectId(buffer);
}

export async function addUserAnswer({
  mockIdRef,
  question,
  correctAnswer,
  rating,
  userAns,
  feedback,
  userEmail
}: any) {
  try {
    await connectDb();

    // Fetch user by email to get the ObjectId
    const user = await userModel.findOne({ email: userEmail });
    if (!user) {
      throw new Error("User not found");
    }

   

    // Convert mockIdRef (UUID) to ObjectId
    // const mockId = new Types.ObjectId(mockIdRef as string);;
    // console.log(mockId)

    const newUserAns = await UserAnswerModel.create({
      mockIdRef,
      question,
      correctAnswer,
      rating,
      userAns,
      feedback,
      userEmail: user._id // Ensure user._id is an ObjectId as well
    });

    console.log(newUserAns)

    return { newUserAns };
  } catch (err: any) {
    console.log(err);
    return {
      error: err.message,
    };
  }
}
