import React from "react";
import {   CrossIcon,
  MailIcon,
  UserAvatarIcon,
  NotificationIcon} from "../../../assets/index";
export default function TopNav() {
  return (
    <div className=" flex justify-end items-center">
    
      <div className="flex w-1/2 justify-between items-center">
        <div className="flex justify-start items-start">
          <button className="w-[10rem] gap-3 text-white py-3 bg-[#4F4F4F] flex justify-center items-center rounded-md">
            <span>
              <img src={CrossIcon || "https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_2_ibjtbu.png"} alt="" />
            </span>
                Create Invite
          </button>
        </div>
        <div className="flex gap-3 pr-4 justify-center items-center">
          <div>
            <img src={MailIcon} alt="" />
          </div>
          <div >
            <img src={NotificationIcon} alt="" />
          </div>
          <div className="bg-[#FFC145] rounded-full">
            <img src={UserAvatarIcon} alt="" />
          </div>
          <div className="flex flex-col leading-[1.3rem]">
            <h1 className="text-[#404040] font-bold font-dmSans text-md">Andrew</h1>
            <h3 className="text-[#AEAEAE] font-medium font-dmSans text-md">Admin account</h3>
          </div>
        </div>
      </div>

    </div>
  );
}
