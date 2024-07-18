import BottomBar from "@/components/layout/BottomBar";
import HeaderBar from "@/components/layout/HeaderBar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-20 bg-white">
        <HeaderBar />
      </div>
      <div
        className="w-full"
        style={{
          height: "calc(100% - 80px)",
        }}
      >
        {children}
      </div>
      <div className="container lg:max-w-lg w-full mx-auto fixed bottom-0">
        <BottomBar />
      </div>
    </div>
  );
};

export default MainLayout;
