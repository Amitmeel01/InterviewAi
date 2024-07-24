"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

function MobileNav() {
  const path = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={30}
          className="rounded-full"
        />
      </Link>

      <nav className="flex items-center">
        <SignedIn>
          <div className="px-8">
          <UserButton afterSignOutUrl="/sign-in" />
          </div>
        
       
        
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button onClick={() => setIsSheetOpen(true)} className="focus:outline-none">
                <Image
                  src="/images/menu.svg"
                  alt="menuIcon"
                  width={38}
                  height={28}
                />
              </button>
            </SheetTrigger>
            <SheetContent className="sheet-content max-sm:w-64">
              <div className="flex flex-col gap-4 mt-16 items-center">
              <Image
          src="/images/logo.png"
          alt="logo"
          width={150}
          height={30}
          className="rounded-full"
        />

       
               
                <ul className='flex flex-col gap-8 mt-16 text-black font-bold'>
                  <li
                    className={`hover:text-purple-500 ${path === '/dashbord' && 'text-purple-500 font-bold'} cursor-pointer`}
                    onClick={() => router.push('/dashbord')}
                  >
                    Dashboard
                  </li>
                  <li
                    className={`hover:text-purple-500 ${path === '/upgrade' && 'text-purple-500 font-bold'}cursor-pointer`}
                    onClick={() => router.push('/upgrade')}
                  >
                    Upgrade
                  </li>
                  <li
                    className={`hover:text-purple-500 ${path === '/help' && 'text-purple-500 font-bold'}cursor-pointer`}
                    onClick={() => router.push('/help')}
                  >
                    How it works?
                  </li>
                </ul>



  
 
                
              </div>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-700">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
}

export default MobileNav;
