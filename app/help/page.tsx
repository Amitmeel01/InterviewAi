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
                  <p className="text-gray-500 dark:text-gray-400">To get started with InterviewAi, simply sign up, complete your profile, and start practicing with our AI-driven interview simulations. You'll receive feedback to help you improve.</p>
                </div>
                <div className="mb-10">                        
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                    What types of questions can I expect in an InterviewAi simulation?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">InterviewAi simulations cover a wide range of questions, including behavioral, situational, and role-specific questions. This variety ensures comprehensive preparation.</p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                    Can I track my progress on InterviewAi?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Yes, InterviewAi provides progress tracking and performance metrics. This feature helps you monitor your improvement and focus on areas that need attention.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <h1 className='font-bold text-4xl text-center text-zinc-700 mb-8 mt-16'>Testimonials</h1>

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="relative max-w-screen-md mx-auto h-96">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-transform transform ${index === currentIndex ? 'translate-x-0' : direction === 'next' ? 'translate-x-full' : '-translate-x-full'} ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.09032 12.9254C6.9707 13.3032 6.91089 13.7016 6.91089 14.1148C6.91089 15.9827 8.44266 17.5145 10.3105 17.5145C12.1784 17.5145 13.7101 15.9827 13.7101 14.1148C13.7101 11.4148 11.9109 9.07417 9.57025 7.88646L12.7127 0.268005C19.207 3.25474 23.5164 9.83757 23.5164 17.5145C23.5164 22.2994 19.5951 26.2207 14.8102 26.2207C10.0253 26.2207 6.104 22.2994 6.104 17.5145C6.104 16.4865 6.22432 15.4911 6.44777 14.5376L7.09032 12.9254Z" fill="currentColor"/>
                    <path d="M-2.14013e-05 12.9254C-0.119657 13.3032 -0.179469 13.7016 -0.179469 14.1148C-0.179469 15.9827 1.35231 17.5145 3.22015 17.5145C5.088 17.5145 6.61977 15.9827 6.61977 14.1148C6.61977 11.4148 4.82051 9.07417 2.47989 7.88646L5.62233 0.268005C12.1166 3.25474 16.4261 9.83757 16.4261 17.5145C16.4261 22.2994 12.5048 26.2207 7.71986 26.2207C2.93493 26.2207 9.15527e-05 22.2994 9.15527e-05 17.5145C9.15527e-05 16.4865 0.120422 15.4911 0.34387 14.5376L-2.14013e-05 12.9254Z" fill="currentColor"/>
                  </svg> 
                  <blockquote>
                    <p className="text-2xl font-medium text-gray-900 dark:text-white">{testimonial.quote}</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src={testimonial.image} alt="profile picture" />
                    <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">{testimonial.author}</div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{testimonial.position}</div>
                    </div>
                  </figcaption>
                </div>
              ))}
            </div>

            <div className="flex justify-center  space-x-4">
              <button onClick={handlePrev} className="p-2 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 mb-64">
                <FaArrowLeft />
              </button>
              <button onClick={handleNext} className="p-2 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 mb-64">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Help;