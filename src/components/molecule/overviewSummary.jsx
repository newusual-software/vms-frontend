import React from "react";

export default function OverviewSummary() {
  return (
    <div className="w-full flex flex-row justify-between items-center gap-8"> 
      <div className="w-[25%] bg-white shadow-xl rounded-2xl flex flex-col justify-center item-center">
        <div className="w-full flex flex-col justify-center item-center">
          <div className="w-full pt-14">
            <h1 className="w-full font-dmSans text-center text-[#828282] font-bold text-5xl">20</h1>
          </div>
          <div className="flex justify-center items-center gap-1">
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_otgvia.png" alt="" />
            <span className="text-[#BDBDBD]">Today</span>
          </div>
          <div className="flex flex-col gap-2 pt-10 pb-4 justify-center items-center">
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png" alt="" className="w-6"/>
            <h2 className="text-[#4F4F4F]">Visitors Expected</h2>
          </div>
        </div>
      </div> 
      <div className="w-[25%] bg-white shadow-xl rounded-2xl flex flex-col justify-center item-center">
        <div className="w-full flex flex-col justify-center item-center">
          <div className="w-full pt-14">
            <h1 className="w-full font-dmSans text-center text-[#828282] font-bold text-5xl">4</h1>
          </div>
          <div className="flex justify-center items-center gap-1">
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_otgvia.png" alt="" />
            <span className="text-[#BDBDBD]">Today</span>
          </div>
          <div className="flex flex-col gap-2 pt-10 pb-4 justify-center items-center">
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/group_vi3hmp.png" alt="" className="w-6"/>
            <h2 className="text-[#4F4F4F]">Completed Meetings</h2>
          </div>
        </div>
      </div> 
      <div className="w-[25%] bg-white shadow-xl rounded-2xl flex flex-col justify-center item-center">
        <div className="w-full flex flex-col justify-center item-center">
          <div className="w-full pt-14">
            <h1 className="w-full font-dmSans text-center text-[#828282] font-bold text-5xl">10</h1>
          </div>
          <div className="flex justify-center items-center gap-1">
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/chart_dgyhn2.png" alt="" />
            <span className="text-[#BDBDBD]">Today</span>
          </div>
          <div className="flex flex-col gap-2 pt-10 pb-4 justify-center items-center">
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417732/nem-insurance/decline_ser_kin2b7.png" alt="" className="w-6"/>
            <h2 className="text-[#4F4F4F]">Defaulted Visitors</h2>
          </div>
        </div>
      </div> 
      <div className="w-[25%] bg-white shadow-xl rounded-2xl flex flex-col justify-center item-center">
        <div className="w-full flex flex-col justify-center item-center">
          <div className="w-full pt-14">
            <h1 className="w-full font-dmSans text-center text-[#828282] font-bold text-5xl">10</h1>
          </div>
          <div className="flex justify-center items-center gap-1">
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/chart_dgyhn2.png" alt="" />
            <span className="text-[#BDBDBD]">Today</span>
          </div>
          <div className="flex flex-col gap-2 pt-10 pb-4 justify-center items-center">
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_1_eytqcc.png" alt="" className="w-6"/>
            <h2 className="text-[#4F4F4F]">Pending Visits</h2>
          </div>
        </div>
      </div> 

    </div>
  );
}
