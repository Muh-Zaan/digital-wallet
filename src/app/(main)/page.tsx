"use client";
import TransactionCard from "@/components/TransactionCard";
import WalletCard from "@/components/WalletCard";
import { getMonthNames } from "@/lib/months";
import { useEffect, useRef } from "react";

const dummy = [
  {
    id: 1,
    date: "16 July 2024",
    transaction: [
      {
        id: 1,
        type: "add",
        subject: "PT Nyebar Uang Geratis",
        nominal: 100000000,
        status: true,
        category: "deposit",
        date: "11:16 WIB",
      },
    ],
  },
  {
    id: 2,
    date: "15 July 2024",
    transaction: [
      {
        id: 1,
        type: "add",
        subject: "PT Nyebar Uang Geratis",
        nominal: 100000000,
        status: true,
        category: "deposit",
        date: "11:16 WIB",
      },
      {
        id: 2,
        type: "remove",
        subject: "Coda Shop Indonesia",
        nominal: 100000000,
        status: true,
        category: "withdraw",
        date: "11:16 WIB",
      },
    ],
  },
  {
    id: 3,
    date: "14 July 2024",
    transaction: [
      {
        id: 1,
        type: "add",
        subject: "PT Nyebar Uang Geratis",
        nominal: 100000000,
        status: true,
        category: "deposit",
        date: "11:16 WIB",
      },
      {
        id: 2,
        type: "remove",
        subject: "Coda Shop Indonesia",
        nominal: 100000000,
        status: true,
        category: "withdraw",
        date: "11:16 WIB",
      },
      {
        id: 3,
        type: "add",
        subject: "PT Nyebar Uang Geratis",
        nominal: 100000000,
        status: true,
        category: "deposit",
        date: "11:16 WIB",
      },
      {
        id: 4,
        type: "remove",
        subject: "Coda Shop Indonesia",
        nominal: 100000000,
        status: true,
        category: "withdraw",
        date: "11:16 WIB",
      },
      {
        id: 5,
        type: "add",
        subject: "PT Nyebar Uang Geratis",
        nominal: 100000000,
        status: true,
        category: "deposit",
        date: "11:16 WIB",
      },
      {
        id: 5,
        type: "remove",
        subject: "Coda Shop Indonesia",
        nominal: 100000000,
        status: true,
        category: "withdraw",
        date: "11:16 WIB",
      },
      {
        id: 7,
        type: "add",
        subject: "PT Nyebar Uang Geratis",
        nominal: 100000000,
        status: true,
        category: "deposit",
        date: "11:16 WIB",
      },
      {
        id: 8,
        type: "remove",
        subject: "Coda Shop Indonesia",
        nominal: 100000000,
        status: true,
        category: "withdraw",
        date: "11:16 WIB",
      },
      {
        id: 9,
        type: "add",
        subject: "PT Nyebar Uang Geratis",
        nominal: 100000000,
        status: true,
        category: "deposit",
        date: "11:16 WIB",
      },
      {
        id: 10,
        type: "remove",
        subject: "Coda Shop Indonesia",
        nominal: 100000000,
        status: true,
        category: "withdraw",
        date: "11:16 WIB",
      },
    ],
  },
];

const Home = () => {
  const { months, currentMonthIndex } = getMonthNames();
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (monthRefs.current[currentMonthIndex]) {
      monthRefs.current[currentMonthIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [currentMonthIndex]);

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full h-[307px] overflow-hidden px-6 py-4">
        <div className="w-full h-[225px]">
          <WalletCard />
        </div>
        <div className="w-full h-[50px] mt-3 flex justify-between items-center gap-4">
          <button className="w-2/4 h-full bg-black flex justify-center items-center font-semibold rounded-2xl text-white">
            Deposit
          </button>
          <button className="w-2/4 h-full bg-black flex justify-center items-center font-semibold rounded-2xl text-white">
            Withdraw
          </button>
        </div>
      </div>
      <div
        className="w-full border-t-2 rounded-t-[50px] px-6 py-4 bg-gray-50"
        style={{
          height: "calc(100% - 287px - 40px)",
        }}
      >
        <div className="w-10 h-[3px] bg-gray-200 rounded-full mx-auto"></div>
        <div className="w-full h-10 my-4 flex gap-4 items-center overflow-x-auto hide-scrollbar">
          {months.map((month, index) => (
            <p key={index} className="text-sm font-medium w-60 text-center">
              {month}
            </p>
          ))}
        </div>
        <div
          className="w-full overflow-y-auto hide-scrollbar flex flex-col pb-20"
          style={{
            height: "calc(100% - 40px - 38px)",
          }}
        >
          {dummy.map((result) => (
            <TransactionCard key={result.id} data={result} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
