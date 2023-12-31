"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";
import Title from "../components/todo/Title";
import TodoHome from "../components/todo/page";
import LoadingGif from "../components/LoadingGif";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';
const page = () => {
  const pathname = usePathname();

  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState('');
  const router = useRouter();

  const initializePath = () => {
    setCurrentPath(pathname);
  };
  useEffect(() => {
    initializePath(); // Call initializePath when the component loads
  }, []);
  useEffect(() => {
    if(!user){
    
      
      
    if (currentPath === '/profile') {
      // Redirect to the home page
      router.push('/'); // Replace '/' with your home page route
    }
  }
  }, [currentPath, router]);

  const handleDivLoad = () => {
    if(!user){
    
    initializePath(); 
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
    <div className="welcome-box">
      {loading ? (
        <Spinner />
      ) : user ? (
        <div>
          <p className="welcome">
            Welcome, {user.displayName} - Please Check your To-Dos
          </p>
          <TodoHome />
        </div>
      ) : (
        <div className="welecome-container-2" onLoad={handleDivLoad}>
          <div className="login-message-container">
            <div>
              {" "}
              {/* <LoadingGif /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
