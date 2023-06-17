import React from "react";
import { CloudIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/userSignUp");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center items-center gap-3 ">
        <div>
          <img src={ CloudIcon } alt="cloud icon" className="w-14"/>
        </div>
        <div>
          <h2 className="font-bold text-[#0F4264] text-2xl font-quicksand">New usual</h2>
        </div>
      </div>
      <div className="pt-10">
        <h1 className="font-bold text-4xl ">Welcome to <span className="text-[#4F4F4F]">New usual</span></h1>
        <h3 className="font-500 text-lg text-[#BDBDBD] text-center py-3">To book a meeting click on the button below </h3>
      </div>
      <div className="pt-12 ">
        <button onClick={handleSubmit} className="bg-[#4F4F4F] w-[20rem] py-3 text-white rounded-lg ">Schedule a Meeting</button>
      </div>
    </div>
    
  );
}
