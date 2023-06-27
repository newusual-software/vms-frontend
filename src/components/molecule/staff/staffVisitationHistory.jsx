import React, { useState, useEffect } from "react";
import axios from "axios";
import VisitationHistoryTable from "../visitationHistoryTable";
import { GlobalRegister } from "../GlobalVisitorRegister";
import { Post } from "../../../utils/request";

const StaffVisitationHistory = () => {
  const [allVisitor, setAllVisitor] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [staffId, setStaffId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedStaffId = localStorage.getItem("staffId");
    setStaffId(storedStaffId);
    fetchAllVisitor();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSend = (email, fullName, date, time, purpose, phoneNumber) => {
    const url = "/signup/staff";
    const data = {
      email,
      fullName,
      date,
      time,
      purposeOfVisit: purpose,
      phoneNumber,
      staffAdminId: staffId,
    };
    console.log(data, url);
    Post(url, data, (response, error) => {
      if (response) {
        // Handle successful response
        console.log("Response:", response);
        closeModal();
      } else {
        // Handle error
        console.error("Error:", error.error);
      }
    });
  };

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

  const handleNextPage = () => {
    const totalPages = Math.ceil(allVisitor.length / 5);
    setCurrentPage((prevPage) => {
      if (prevPage < totalPages) {
        return prevPage + 1;
      }
      return prevPage;
    });
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage > 1) {
        return prevPage - 1;
      }
      return prevPage;
    });
  };

  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const displayedVisitors = allVisitor.slice(startIndex, endIndex);

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
          <button
            onClick={openModal}
            className="w-[10rem] gap-3 text-white py-3 bg-[#4F4F4F] flex justify-center items-center rounded-md"
          >
            <span>
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_2_ibjtbu.png"
                alt=""
              />
            </span>
            Create Visitor
          </button>
          <GlobalRegister
            isOpen={isOpen}
            closeModal={closeModal}
            handleSend={handleSend}
          />
        </div>
      </div>
      <main>
        <VisitationHistoryTable visitors={displayedVisitors} />
        {allVisitor.length > 5 && (
          <div className="flex justify-between items-center py-7 w-full">
            <div>
              <button
                onClick={handlePreviousPage}
                className="w-[7rem] gap-2 text-white py-2 bg-[#4F4F4F] flex justify-center items-center rounded-md text-sm"
              >
                Previous
              </button>
            </div>
            <div>{`${currentPage}/${Math.ceil(allVisitor.length / 5)}`}</div>
            <div>
              <button
                onClick={handleNextPage}
                className="w-[7rem] gap-2 text-white py-2 bg-[#4F4F4F] flex justify-center items-center rounded-md text-sm"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default StaffVisitationHistory;
