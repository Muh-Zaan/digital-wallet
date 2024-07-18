import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import Image from "next/image";
import ChipImage from "./../../public/assets/chip.svg";
import { MoreHorizontal } from "react-feather";

const WalletCard = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <BackgroundAnimation>
        <div className="w-full h-full p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="w-12 h-10 relative opacity-50">
              <Image
                src={ChipImage}
                alt="...chip-image"
                fill
                objectFit="cover"
              />
            </div>
            <div>
              <MoreHorizontal color="white" />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-bold text-white">Rp 10.000.000</h1>
          </div>
          <div className="h-10">
            <p className="text-white font-semibold">3030085156970093</p>
            <p className="text-sm font-medium text-white">
              <span className="font-normal">as</span> Muhammad Zainuddin Basyar
            </p>
          </div>
        </div>
      </BackgroundAnimation>
    </div>
  );
};

export default WalletCard;
