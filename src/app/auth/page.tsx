import BackgroundAnimation from "@/components/BackgroundAnimation";
import Link from "next/link";
import React from "react";

const AuthPage = () => {
  return (
    <div className="w-full h-screen">
      <BackgroundAnimation>
        <div className="w-full flex flex-col justify-center items-center text-white">
          <p className="text-sm">Welcome User</p>
          <h1 className="text-xl w-3/4 font-bold text-center my-4">
            Welcome to our website AyoNabung. save your income for a beautiful
            future
          </h1>
          <p className="font-medium">Start saving now</p>
          <div className="flex justify-center items-center mt-4 gap-4">
            <Link href={"/sign-in"}>
              <button className="w-32 py-2 bg-white/10 backdrop-blur rounded-lg text-sm">
                Sign In
              </button>
            </Link>
            <button className="w-32 py-2 bg-white/10 backdrop-blur rounded-lg text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </BackgroundAnimation>
    </div>
  );
};

export default AuthPage;
