/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function AltTopNav({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-[33.3%] flex">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search anything..."
          value={searchTerm}
          onChange={handleInputChange}
          className="bg-transparent border border-[#BDBDBD] shadow-lg py-2 px-3 font-roboto text-black placeholder:text-black rounded-l-lg focus:border-[#BDBDBD] focus:outline-none"
        />
        <button
          className="w-[6rem] gap-3 text-white py-2 bg-[#4F4F4F] flex justify-center items-center rounded-r-md"
          onClick={handleInputChange}
        >
          Search
        </button>
      </div>
      <div className="w-[33.3%] flex justify-center items-center gap-2">
        <div>Accounting</div>
        <div className="animate-bounce">
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1680787080/nem-insurance/cooli_rwidk3.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-[33.3%] flex justify-center items-center gap-2">
        <div>
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1680787783/nem-insurance/coolicon_stfzqr.png"
            alt=""
          />
        </div>
        <div>Today</div>
        <div className="animate-bounce">
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1680787080/nem-insurance/cooli_rwidk3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
