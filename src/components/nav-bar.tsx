"use client"

import Link from "next/link";
import { UserButton, useAuth } from '@clerk/nextjs'

export default function NavBar() {
  const { isLoaded, userId, sessionId, getToken } = useAuth()

  // if (!isLoaded || !userId) {
  //   return null;
  // }

  return (
    <div className="text-sm w-full">
      <ul className="flex items-center justify-between gap-5" >
        <Link href='/'>
          <li>Home</li>
        </Link>

        <div className="flex gap-5">
          <Link href='/sign-in'>
            <li>Login</li>
          </Link>
        
          <Link href='/sign-up'>
            <li>SignUp</li>
          </Link>
        
          <Link href='/profile'>
            <li>Profile</li>
          </Link>
          
          <Link href='/login' >
            <UserButton afterSignOutUrl="/" />
          </Link>
        </div>
      </ul>
    </div>
  )
}