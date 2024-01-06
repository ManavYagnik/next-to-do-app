'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  

    const pathname = usePathname();

  let className = 'p-2 cursor-pointer';
  if(pathname === '/'){
    className='p-2 cursor-pointer highlight-name'
  }

  

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
   
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {

    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2 navbar-container">
      <ul className="flex">
      
      

        {!user ? null : (
          <li className={className}>
            <Link href="/profile">To-Do</Link>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        <ul className="flex">
          <li onClick={handleSignIn} className={className}>
            Login
          </li>
          <li onClick={handleSignIn} className={className} >
            Sign up
          </li>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p className="cursor-pointer" onClick={handleSignOut}>
            Sign out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
