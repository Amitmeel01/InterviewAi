"use client";
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { chatSession } from '@/lib/GeminiAi';
import { LoaderCircle } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import { addData } from '@/lib/actions/interviewModal.action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

type AddDataResponse = {
    newInterview?: {
        mockId: string;
        [key: string]: any;
    };
    error?: string;
};

function AddInterview() {
    const [openDialog, setOpenDialog] = useState(false);
    const [role, setRole] = useState("");
    const [dsec, setDsec] = useState("");
    const [exp, setExp] = useState("");
    const [loading, setLoading] = useState(false);
    const [jsonRes, setJsonRes] = useState('');
    const router = useRouter();
    const { user } = useUser();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            setLoading(true);
            const inputPrompt = `Job position: ${role}, Job Description: ${dsec}, Year of Experience: ${exp}, depending on job position, job description and year of experience giving only ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION}, interview questions with proper answers in form of JSON form`;

            const result = await chatSession.sendMessage(inputPrompt);
            const resText = await result.response.text();

            // Clean response by removing unnecessary characters and extract JSON content
            const cleanedText = resText.replace(/```json/g, '').replace(/```/g, '').trim();
            const jsonResponseMatch = cleanedText.match(/\{[\s\S]*\}|\[[\s\S]*\]/);

            if (jsonResponseMatch) {
                const jsonResponse = jsonResponseMatch[0];
                console.log(JSON.parse(jsonResponse));
                setJsonRes(jsonResponse);

                const newData: AddDataResponse = await addData({
                    mockId: uuidv4(),
                    jobPosition: role,
                    Experince: exp,
                    jobDes: dsec,
                    jsonMockRes: jsonResponse,
                    createdBy: user?.primaryEmailAddress?.emailAddress,
                });

                if (newData.error) {
                    toast.error("Something went wrong!!");
                } else if (newData.newInterview) {
                    router.push(`/dashbord/interview/${newData.newInterview.mockId}`);
                }
            } else {
                toast.error("Something went wrong!!");
                throw new Error("No JSON content found in response");
            }

            setOpenDialog(false);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div>
                <div
                    className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
                    onClick={() => setOpenDialog(true)}
                >
                    <h2 className='font-bold text-lg text-center'>+Add New</h2>
                </div>

                <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogContent className='md:max-w-2xl'>
                        <DialogHeader>
                            <DialogTitle><h2 className='font-bold text-2xl'>Tell us more About Your Job Interview..</h2></DialogTitle>
                            <DialogDescription>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <h2>Add Details About Your Job Position/role, Job Description and years of experience</h2>

                                        <div className='mt-7 my-3'>
                                            <label className='mb-2'>Job Role/Position</label>
                                            <Input placeholder='Ex. Frontend Developer' required onChange={(e: any) => setRole(e.target.value)} />
                                        </div>

                                        <div className='my-6'>
                                            <label className='mb-2'>Job Description</label>
                                            <Textarea placeholder='Ex. React, Angular, Next.js etc.' required onChange={(e: any) => setDsec(e.target.value)} />
                                        </div>

                                        <div className='my-3'>
                                            <label className='mb-2'>Year of Experience</label>
                                            <Input placeholder='Ex. 2' type='number' max={50} min={0} required onChange={(e: any) => setExp(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className='flex gap-5 justify-end mt-4'>
                                        <Button variant='ghost' type='button' onClick={() => setOpenDialog(false)}>Cancel</Button>
                                        <Button className={`bg-purple-600 ${loading && 'opacity-50 cursor-not-allowed'}`} type="submit" disabled={loading}>{loading ? <> <LoaderCircle className='animate-spin' /> Processing... </> : "Start Interview"}</Button>
                                    </div>
                                </form>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}

export default AddInterview;
