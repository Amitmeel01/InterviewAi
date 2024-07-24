"use client";
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Help from '../../app/help/page';

function Header() {

  const path=usePathname();  // jis path par app ho usper redirect kar deta hai

  const router=useRouter();

   


  return (
    <div className='flex justify-between items-center p-4 bg-secondary shadow-sm '>
       <Image src='/images/logo.png' alt='image' width={140} height={68}/>

       <ul className='hidden  md:flex gap-10 items-center text-black font-bold cursor-pointer max-sm:hidden'>
        
        <li className={`hover:text-purple-500 ${path==='/dashbord' && 'text-purple-500 font-bold'}`} onClick={()=>router.push('/dashbord')}>Dashbord</li>
        <li className={`hover:text-purple-500 ${path==='/upgrade' && 'text-purple-500 font-bold'}`} >Upgrade</li>
        <li className={`hover:text-purple-500 ${path==='/help' && 'text-purple-500 font-bold'}`} onClick={()=>router.push('/help')}>How it works?</li>
        
       </ul>
       <div className='max-sm:hidden'>
       <UserButton showName/>
       </div>
      


    </div>
  )
}

export default Header