import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#FBFBFB] flex justify-center items-center ">
      <div className="w-1/2 h-[584px] bg-white rounded-xl flex flex-col items-center shadow-2xl">
        <div>
          <h1 className="uppercase font-lato pt-10 font-bold text-[24px] text-[#BDBDBD]">select a flow</h1>
        </div>
        <div className="pt-20 capitalize font-lato flex flex-col gap-10">
          <NavLink
            to={"/landing"}
            className={"font-bold px-6 py-3 bg-[#FBFBFB] shadow-md"}
          >
                    user
          </NavLink>
          <NavLink
            to={"/staffLogin"}
            className={"font-bold px-6 py-3 bg-[#FBFBFB] shadow-md"}
          >
                    staff
          </NavLink>
          <NavLink
            to={"/adminLogin"}
            className={"font-bold px-6 py-3 bg-[#FBFBFB] shadow-md"}
          >
                    admin
          </NavLink>

        </div>
      </div>
    </div>
  );
}
