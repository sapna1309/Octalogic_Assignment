//import React from 'react'

import LeftSideBar from "../components/LeftSideBar";

const DashbordOverview = () => {
  return (
    <div className="felx flex-row bg-bg_gray w-[1380px] h-[1024px] border-2 border-red ">
      {/* Left-Side-Dive */}
      <LeftSideBar/>
      {/* Right-Side-Div */}
      <div className="w-[1284px] h-[1024px] py-[24px] px-[36px] flex flex-col gap-[32px] border-2 border-black">
        <div className="w-[125px] h-[38px]">
          <p className="text-[#83858B] text-[28px] font-[700px] leading-[38.9px]">
            Overview
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashbordOverview;
