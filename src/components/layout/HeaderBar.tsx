import React from "react";
import { Bell } from "react-feather";
import ImageProfile from "../../../public/assets/profile.jpg";
import Image from "next/image";

const HeaderBar = () => {
  return (
    <div className="w-full h-full flex justify-between items-center px-6">
      <div className="flex flex-col w-2/3">
        <h1 className="text-base font-bold w-full truncate">
          Hai, Muhammad Zainuddin Basyar
        </h1>
        <p className="text-xs font-medium">Thursday, 18 July 2024</p>
      </div>
      <div className="w-1/3 flex gap-3 justify-end items-center">
        <button className="p-2.5 bg-gray-100 rounded-md shadow-md border-2 border-white">
          <Bell size={18} />
        </button>
        <div className="h-10 w-10 bg-gray-100 rounded-full shadow-md relative overflow-hidden">
          <Image
            src={ImageProfile}
            alt="...profile-image"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
