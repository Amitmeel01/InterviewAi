import type { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '@/lib/db';
import interviewModel from '@/lib/modals/interview.modal';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { interviewId } = req.query;

  await connectDb();

  try {
    const interview = await interviewModel.findOne({ mockId: interviewId });
    if (!interview) {
      return res.status(404).json({ error: 'Interview not found' });
    }
    res.status(200).json(interview);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
