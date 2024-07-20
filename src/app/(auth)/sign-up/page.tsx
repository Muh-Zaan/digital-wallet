"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "react-feather";

const RegisterPage = () => {
  const [type, setType] = useState<string>("password");

  return (
    <div className="w-full h-screen py-20 px-10">
      <h1 className="text-2xl font-bold">Welcome User!</h1>
      <p className="text-sm font-medium">
        Please enter the available fields to continue
      </p>
      <form className="mt-20 w-full">
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
        <p className="text-sm font-medium text-gray-400 mt-10">Phone Number</p>
        <div className="relative border-b w-full mt-2">
          <div className="w-8 absolute top-1/2 -translate-y-1/2 flex justify-center items-center">
            <Mail size={18} />
          </div>
          <input
            className="w-full text-sm py-2 outline-none pl-9 font-medium"
            placeholder="Input your phone number..."
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
        <button className="w-full bg-black text-white py-2 text-sm mt-8">
          Sign Up
        </button>
        <div className="w-full flex justify-center gap-5 items-center my-8">
          <div className="w-2/5 h-[1px] bg-gray-300"></div>
          <p className="text-xs font-medium">OR</p>
          <div className="w-2/5 h-[1px] bg-gray-300"></div>
        </div>
        <button className="w-full bg-white text-black border py-2 text-sm">
          Sign Up With Google
        </button>
        <div className="w-full mt-5 text-center">
          <Link href={"/sign-in"} className="text-sm font-medium">
            Already have account?{" "}
            <span className="text-blue-500 underline">Sign In</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
