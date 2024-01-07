'use client';
import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { usePathname, redirect } from 'next/navigation'


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
      redirect('/');
    
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
         <a>   <Link href="/profile" className="link-todo">Click here for To-Do</Link></a>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        <ul className="navbar-container">
          <li onClick={handleSignIn} className={className}>
            Login
          </li>
          
        </ul>
      ) : (
        <Fragment >
        <div className="welcome">
          <p>Welcome, {user.displayName}  </p>
         
        </div>
        <p className="sign-out" onClick={handleSignOut}>
        <a>   <Link href="/" className="link-todo">Sign out</Link></a>
          </p>
        </Fragment>
      )}
    </div>
  );
};

export default Navbar;
