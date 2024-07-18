"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "react-feather";

const LoginPage = () => {
  const [type, setType] = useState<string>("password");

  return (
    <div className="w-full h-screen py-20 px-4">
      <h1 className="text-2xl font-bold">Welcome Back</h1>
      <p className="text-sm font-medium">
        Please enter the available fields to continue
      </p>
      <div className="mt-20 w-full">
        <p className="text-sm font-medium text-gray-400">Email</p>
        <div className="relative border-b w-full mt-2">
          <div className="w-8 absolute top-1/2 -translate-y-1/2 flex justify-center items-center">
            <Mail size={18} />
          </div>
          <input
            className="w-full text-sm py-2 outline-none pl-9 font-medium"
            placeholder="Input your email..."
          />
        </div>
        <p className="text-sm font-medium text-gray-400 mt-10">Password</p>
        <div className="relative border-b w-full mt-2">
          <div className="w-8 absolute top-1/2 -translate-y-1/2 flex justify-center items-center">
            <Lock size={18} />
          </div>
          <button
            className="w-8 absolute right-0 top-1/2 -translate-y-1/2 flex justify-center items-center"
            onClick={() => {
              type == "password" ? setType("text") : setType("password");
            }}
          >
            {type == "password" ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
          <input
            className="w-full text-sm py-2 outline-none pl-9 font-medium"
            placeholder="Input your password..."
            type={type}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
