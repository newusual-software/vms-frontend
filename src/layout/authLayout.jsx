/* eslint-disable react/prop-types */
import React from "react";
import Header from "../components/common/header";

export default function AuthLayout({children, heading, subHeading}) {
  return (
    <>
      <Header className={"animated-div absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}/>

      <div className="animate-scale-in">
        <div className="flex justify-center items-center w-full pt-32">
          <div className="w-1/2 flex flex-col justify-center items-center font-dmSans">
            <div className=" font-bold  text-center text-black">
              <h2 className="text-3xl">{heading || "Sign In As "}</h2>
              <h5 className="px-32 text-lg py-3 text-[#BDBDBD]">{subHeading || "You will be sent a confirmation mail when your reservation has been confirmed"}</h5>
            </div>
            <div className="w-[75%]  my-4 h-max pb-10 flex  items-center flex-col rounded-lg shadow-xl">
              {children}
            </div>
          </div>  
        </div>
      </div>
        
    </>
  );
}
