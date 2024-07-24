"use client"
import Header from '@/components/shared/Header';
import MobileNav from '@/components/shared/Mobile';
import { testimonial } from '@/lib/utils';

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

const testimonials = testimonial;

function Help() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <div className='max-sm:hidden'>
    <Header />
    </div>
     <div className='hidden max-sm:block'>
     <MobileNav/>
     </div>

      <div className="p-6">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                    How can I prepare for an interview using InterviewAi?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">InterviewAi helps you prepare for interviews by providing AI-driven evaluations of your responses. Practice with commonly asked questions to refine your answers.</p>
                </div>
                <div className="mb-10">                        
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                    How does InterviewAi evaluate my responses?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">InterviewAi uses advanced AI algorithms to analyze your answers based on content, clarity, and relevance. It provides constructive feedback to help you improve.</p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                    Is InterviewAi suitable for technical interviews?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Yes, InterviewAi caters to both technical and non-technical interviews. It offers tailored evaluations and feedback based on the specific requirements of technical roles.</p>
                </div>
              </div>
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                    How do I get started with InterviewAi?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">To get started with InterviewAi, simply sign up, complete your profile, and start practicing with our AI-driven interview simulations. You&apos;ll receive feedback to help you improve.</p>
                </div>
                <div className="mb-10">                        
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                    What types of questions can I expect in an InterviewAi simulation?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">InterviewAi offers a wide range of questions, including behavioral, situational, and role-specific queries. This ensures a comprehensive preparation for various interview scenarios.</p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                    Can I track my progress over time with InterviewAi?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Absolutely! InterviewAi provides detailed analytics and progress tracking, allowing you to monitor your improvement and focus on areas that need more attention.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
          <div className="relative bg-white rounded-lg shadow-lg p-8">
            <div className={`testimonial-slide ${direction}`}>
              <blockquote className="text-lg italic text-gray-800">{testimonials[currentIndex].quote}</blockquote>
              <cite className="block mt-4 text-right font-medium text-gray-900">{testimonials[currentIndex].author}</cite>
            </div>

            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
              onClick={handlePrev}
            >
              <FaArrowLeft />
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
              onClick={handleNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
