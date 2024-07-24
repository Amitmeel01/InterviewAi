import AddInterview from "@/components/shared/AddInterview";
import InterviewList from "@/components/shared/InterviewList";
import { UserButton } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl">Dashbord</h2>
      <h2 className="text-grey-600 py-4">
        Create and Start your prepration for InterviewAi
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 p-4">
        <AddInterview />
      </div>

      <InterviewList />
    </div>
  );
}

export default page;
