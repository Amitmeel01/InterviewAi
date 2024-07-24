import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// testimonials


export const testimonial = [
  {
    id: 1,
    quote: "InterviewAi has revolutionized the way I prepare for interviews. The AI-driven feedback is spot on and has significantly improved my confidence.",
    author: "Jane Doe",
    position: "Software Engineer at TechCorp",
    image: "/images/user1.jpg"
  },
  {
    id: 2,
    quote: "The tailored evaluations and constructive feedback from InterviewAi helped me land my dream job. Highly recommend it to anyone preparing for interviews!",
    author: "John Smith",
    position: "Data Scientist at DataWorks",
    image: "/images/user2.jpg"
  },
  {
    id: 3,
    quote: "As a recent graduate, InterviewAi was invaluable in my job search. The practice questions and AI evaluations gave me a competitive edge.",
    author: "Emily Johnson",
    position: "Junior Developer at WebSolutions",
    image: "/images/user3.jpg"
  },
  {
    id: 4,
    quote: "InterviewAi's detailed feedback on my responses was incredibly helpful. It highlighted areas I needed to improve and made my preparation more effective.",
    author: "Michael Brown",
    position: "Product Manager at InnovateTech",
    image: "/images/user4.jpg"
  },
  {
    id: 5,
    quote: "InterviewAi's AI-based evaluations are incredibly accurate and have helped me identify and work on my weak points. I feel much more prepared for my interviews now.",
    author: "Alice Williams",
    position: "UX Designer at CreativeSolutions",
    image: "/images/user5.jpg"
  },
  {
    id: 6,
    quote: "I love how InterviewAi provides personalized feedback. It feels like having a personal interview coach. I've become much more confident and articulate.",
    author: "David Lee",
    position: "Marketing Specialist at MarketGurus",
    image: "/images/user6.jpg"
  },
  {
    id: 7,
    quote: "InterviewAi is a game changer! The AI-driven insights and practice sessions are exactly what I needed to excel in my interviews.",
    author: "Sarah Martinez",
    position: "HR Manager at TalentWorks",
    image: "/images/user7.jpg"
  },
  {
    id: 8,
    quote: "Thanks to InterviewAi, I was able to secure multiple job offers. The feedback and tips were incredibly helpful in refining my answers and boosting my confidence.",
    author: "Robert Kim",
    position: "Business Analyst at FinancePros",
    image: "/images/user8.jpg"
  }
];
