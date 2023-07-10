import React from "react";

const FilterOptions = ({ filter, handleFilterChange }) => {
  return (
    <div className="fixed bg-white font-dmSans left-42 top-52 h-full w-40 border-r border-gray-300 flex flex-col items-start justify-start">
      <div className="flex items-center mb-5 gap-3">
        <div>
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1680787103/nem-insurance/coolicon_nneo1s.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-lg font-bold text-[#4F4F4F]">Filter</h2>
        </div>
      </div>

      <label htmlFor="all" className="flex items-center mb-3 text-[#4F4F4F]">
        <input
          type="checkbox"
          id="all"
          name="all"
          value="all"
          checked={filter === "all"}
          onChange={handleFilterChange}
          className="mr-2"
        />
        All
      </label>
      <label
        htmlFor="expected"
        className="flex items-center text-[#4F4F4F] mb-3"
      >
        <input
          type="checkbox"
          id="expected"
          name="expected"
          value="expected"
          checked={filter === "expected"}
          onChange={handleFilterChange}
          className="mr-2"
        />
        Expected
      </label>
      <label
        htmlFor="check-in"
        className="flex items-center text-[#4F4F4F] mb-3"
      >
        <input
          type="checkbox"
          id="check-in"
          name="check-in"
          value="check-in"
          checked={filter === "check-in"}
          onChange={handleFilterChange}
          className="mr-2"
        />
        Check In
      </label>
      <label
        htmlFor="check-out"
        className="flex items-center text-[#4F4F4F] mb-3"
      >
        <input
          type="checkbox"
          id="check-out"
          name="check-out"
          value="check-out"
          checked={filter === "check-out"}
          onChange={handleFilterChange}
          className="mr-2"
        />
        Check Out
      </label>
    </div>
  );
};

export default FilterOptions;
