<<<<<<< HEAD
"use server";
import type { NextApiRequest, NextApiResponse } from 'next';
=======
// "use server";
// import type { NextApiRequest, NextApiResponse } from 'next';
// import connectDb from '@/lib/db';
// import interviewModel from '@/lib/modals/interview.modal';
// import UserAnswerModel from '@/lib/modals/UserAnswer.modal';


// export default async function feedbackHandler(interviewId:any) {

//     console.log(interviewId)


//     await connectDb();

//     try {
//         const interview:any = await UserAnswerModel.find({mockIdRef:interviewId});
//         console.log(interview);

//         return {interview};
//     } catch (err:any) {
//         // res.status(500).json({ error: err.message });
//     }
// }


"use server";
>>>>>>> ef155c9dbed9339f28ac8b35f00c3e2fc43a8808
import connectDb from '@/lib/db';
import interviewModel from '@/lib/modals/interview.modal';
import UserAnswerModel from '@/lib/modals/UserAnswer.modal';
import { NextResponse } from 'next/server';
<<<<<<< HEAD

export default async function feedbackHandler(interviewId:any) {

    console.log(interviewId)

=======

export async function GET(request: Request) {
  const url = new URL(request.url);
  const interviewId = url.searchParams.get('interviewId');
>>>>>>> ef155c9dbed9339f28ac8b35f00c3e2fc43a8808

  if (!interviewId) {
    return NextResponse.json({ error: 'Missing interviewId parameter' }, { status: 400 });
  }

<<<<<<< HEAD
    try {
        const interview:any = await UserAnswerModel.find({mockIdRef:interviewId});
        console.log(interview);

        return {interview};
    } catch (err:any) {
        // res.status(500).json({ error: err.message });
    }
}
=======
  await connectDb();

  try {
    const interview = await UserAnswerModel.find({ mockIdRef: interviewId });
    return NextResponse.json({ interview });
  } catch (err:any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
>>>>>>> ef155c9dbed9339f28ac8b35f00c3e2fc43a8808
