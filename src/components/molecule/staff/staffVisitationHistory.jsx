import React, { useState, useEffect } from "react";
import axios from "axios";
import VisitationHistoryTable from "../visitationHistoryTable";

export default function StaffVisitationHistory() {
  const [allVisitor, setAllVisitor] = useState([]);

  useEffect(() => {
    fetchAllVisitor();
  }, []);

  const fetchAllVisitor = () => {
    const apiUrl = `https://vms-backend.up.railway.app/api/allvisitor`;
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        setAllVisitor(data.visitors);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="shadow-xl py-3 rounded-3xl px-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div>
            <h1 className="text-[#404040] font-dmSans font-medium">
              Visitation history
            </h1>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_3_p6q7x8.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <button className="w-[10rem] gap-3 text-white py-3 bg-[#4F4F4F] flex justify-center items-center rounded-md">
            <span>
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_2_ibjtbu.png"
                alt=""
              />
            </span>
            Create Invite
          </button>
        </div>
      </div>
      <main>
        <VisitationHistoryTable />
        {allVisitor.length > 5 && (
          <div className="flex justify-end items-center py-7 w-full">
            <div className="pr-4">1/24</div>
            <div>
              <button className="w-[7rem] gap-3 text-white py-3 bg-[#4F4F4F] flex justify-center items-center rounded-md">
                Next
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
