'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  

    const pathname = usePathname();

  let className = '';
  if(pathname === '/'){
    className='highlight-name'
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
    <div className="navbar-section">
      <ul className="navbar-container">
      
      

        {!user ? null : (
          <li className={className}>
         <a>   <Link href="/profile">To-Do</Link></a>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        <ul className="navbar-container">
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
          <p className="navbar-container" onClick={handleSignOut}>
            Sign out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
