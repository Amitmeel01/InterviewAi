// pages/api/interviews/list.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '@/lib/db';
import interviewModel from '@/lib/modals/interview.modal';
import UserModel from '@/lib/modals/user.modal';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  await connectDb();

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const interviews = await interviewModel.find({ createdBy: user._id });
    res.status(200).json(interviews);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
