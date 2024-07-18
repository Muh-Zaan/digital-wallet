import React from "react";
import { FileText, Home } from "react-feather";

const BottomBar = () => {
  return (
    <div className="w-full py-4 bg-gray-200 rounded-t-full px-12 flex justify-between items-center relative">
      <div className="w-1/4 flex justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-1">
          <Home size={20} strokeWidth={2} />
          <p className="text-sm font-medium">Home</p>
        </div>
      </div>
      <div className="w-4 h-3 bg-gray-200 absolute -top-2 left-1/2 translate-x-[62px]"></div>
      <div className="w-4 h-4 absolute -top-4 left-1/2 translate-x-[62px] rounded-bl-full bg-gray-50"></div>
      <div className="w-4 h-3 bg-gray-200 absolute -top-2 right-1/2 -translate-x-[62px]"></div>
      <div className="w-4 h-4 absolute -top-4 right-1/2 -translate-x-[62px] rounded-br-full bg-gray-50"></div>
      <button className="h-14 w-1/4 bg-gradient-to-r from-emerald-400 to-cyan-400 absolute -top-7 left-1/2 -translate-x-1/2 rounded-full flex justify-center items-center border-[5px]">
        <p className="text-sm font-semibold text-white">Topup Saldo</p>
      </button>
      <div className="w-1/4 flex justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-1">
          <FileText size={20} strokeWidth={2} />
          <p className="text-sm font-medium">History</p>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
