'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser, SignInButton, UserButton } from '@clerk/nextjs';

function Header() {
  const { isSignedIn, user } = useUser();
  
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-[#000000]/40 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto">
          <nav className="flex justify-between py-4 px-6">
            <div className="flex items-center">
              <Link href="/" className="text-white font-bold text-xl">
                Duo Keyboard Koalition
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-white hover:text-primary">Home</Link>
              <Link href="/goals" className="text-white hover:text-primary">Goals</Link>
              <Link href="/projects" className="text-white hover:text-primary">Projects</Link>
              <Link href="/events" className="text-white hover:text-primary">Events</Link>
              <Link href="/wins" className="text-white hover:text-primary">Wins</Link>
              <Link href="/about" className="text-white hover:text-primary">About</Link>
              
              {isSignedIn ? (
                <div className="flex items-center gap-2">
                  <Link href="/profile" className="text-white hover:text-primary">
                    Profile
                  </Link>
                  <Link href="/restricted" className="text-white hover:text-primary">
                    Restricted
                  </Link>
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8"
                      }
                    }}
                  />
                </div>
              ) : (
                <SignInButton mode="modal">
                  <button className="text-white hover:text-primary">Sign In</button>
                </SignInButton>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;