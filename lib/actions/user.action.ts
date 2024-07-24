
"use server";

import { revalidatePath } from "next/cache";

// import { handleError } from "../utils";


import UserModel from "../modals/user.modal";
import connectDb from "../db";


// CREATE
export async function createUser(user:any) { // here user come from clerk , because clerk trigger event using webhook
  try {
    await connectDb();

    const newUser = await UserModel.create(user);
    console.log("in action part new usere here",newUser) //object form mai

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error)
   
  }
}

// READ
export async function getUserById(userId: string) {
  try {
    await connectDb();

    const user = await UserModel.findOne({ clerkId: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error)
   
  }
}

// UPDATE
export async function updateUser(clerkId: string, user:any) {
  try {
    await connectDb();

    const updatedUser = await UserModel.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error)
   
  }
}

// DELETE
export async function deleteUser(clerkId: string) {
  try {
    await connectDb();

    // Find user to delete
    const userToDelete = await UserModel.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await UserModel.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    console.log(error)
  
  }
}

