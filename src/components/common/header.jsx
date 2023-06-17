import React from "react";
import { CloudIcon } from "../../assets/index";

export default function Header({className}) {
  return (
    <div className={`${className} flex gap-3 py-9 pl-14 `}>
      <div>
        <img src={ CloudIcon } alt="cloud icon" className="w-10"/>
      </div>
      <div>
        <h2 className="font-bold text-[#0F4264] text-xl font-quicksand">New usual</h2>
      </div>
    </div>
  );
}
