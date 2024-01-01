"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";
import Title from "../components/todo/Title";

import TodoHome from "../components/todo/page";

const page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

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
        <p className="welecome-container">
          Welcome, {user.displayName} - Please Check your To-Dos
     
          </p>
         
         <TodoHome/>


</div>
       
      ) : (
       <div className="welecome-container-2"><div className="login-message-container"><div>You must be logged in to view this page - protected route</div></div></div>
      )}
    </div>
  );
};

export default page;
