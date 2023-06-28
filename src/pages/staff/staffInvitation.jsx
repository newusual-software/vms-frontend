import React, { useEffect, useState } from "react";
import AltTopNav from "../../components/common/altTopNav";
import StaffDashboardLayout from "../../layout/staffDashboardLayout";
import { FaUser, FaIdCard, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { Get, Patch } from "../../utils/request";
import { GlobalDialog } from "../../components/molecule/GlobalDialogInvite";
import { CrossIcon } from "../../assets/index";


export default function StaffInvitation() {


  const [isOpen, setIsOpen] = useState(false);
  const [staffId, setStaffId] = useState("");
  const [allInvitedVisitor, setAllInvitedVisitor] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedStaffId = localStorage.getItem("staffId");
    setStaffId(storedStaffId);
    fetchInvitedVisitor();

    const pollingInterval = setInterval(() => {
      fetchInvitedVisitor();
    }, 10000);

    return () => {
      clearInterval(pollingInterval);
    };
  }, []);

  const fetchInvitedVisitor = () => {
    const url = `invited-visitor`;
    Get(url, (response, error) => {
      if (error) {
        console.error("Error:", error.error);
      } else {
        const data = response.visitors;
        setAllInvitedVisitor(data);
      }
    });
  };

  const handleEmailClick = (email) => {
    navigator.clipboard.writeText(email);
    alert("Copy to clipboard successfully");
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(allInvitedVisitor.length / 5);
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
  const displayedVisitors = allInvitedVisitor
    .filter(
      (visitor) =>
        visitor.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        visitor.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(startIndex, endIndex);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSend = (email, duration) => {
    const url = "/staff/invite";
    const data = {
      email,
      duration,
      staffId,
    };
    Patch(url, data, (response, error) => {
      if (error) {
        // Handle the error
        console.error("Error:", error);
        if (
          error.error ===
          "Please add a Purpose of Visit,Please add a Time,Please add a Date,Please add a Phone Number,Please add a Full Name"
        ) {
          alert("No such user found");
        } else {
          alert(error.message);
        }
      } else {
        // Handle the successful response
        alert(response.message);
      }
    });
    closeModal();
  };
  return (
    <StaffDashboardLayout>
      <div className="w-full pt-32 px-14">
        <AltTopNav onSearch={handleSearch} />
        <div className="w-[80%] rounded-lg mx-auto my-4 py-6  px-11 shadow-xl">
          <div className="flex justify-between items-center">
            <div className="flex pt-3 gap-3 items-center">
              <div>
                <h1 className="text-[#404040] font-dmSans font-medium">
                  Invites Created
                </h1>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_3_p6q7x8.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={openModal}
                className="w-[10rem] gap-3 text-white py-3 bg-[#4F4F4F] flex justify-center items-center rounded-md"
              >
                <span>
                  <img
                    src={CrossIcon}
                    alt=""
                    onError={(e) =>
                      (e.target.src =
                        "https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_2_ibjtbu.png")
                    }
                  />
                </span>
                Create Invite
              </button>
              <GlobalDialog
                isOpen={isOpen}
                closeModal={closeModal}
                handleSend={handleSend}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            {allInvitedVisitor.length === 0 ? (
              <div className="text-center py-24">
                <div className="flex justify-center items-center">
                  <img
                    src="https://res.cloudinary.com/phantom1245/image/upload/v1680875816/nem-insurance/coolicon_qcniv0.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3>You don&apos;t have any visits today</h3>
                  <h4>
                    Click on the &quot;Create Invite&quot; button on the
                    right-hand side
                  </h4>
                </div>
              </div>
            ) : (
              <table className="mt-12 px-10 w-full">
                <thead className="py-3 font-dmSans font-normal text-[#404040]">
                  <tr className="">
                    <th className="py-3 text-left">
                      <FaUser className="inline-block" /> Name
                    </th>
                    <th className="py-3 text-left">
                      <FaIdCard className="inline-block" /> ID
                    </th>
                    <th className="py-3 pl-5 text-left">
                      <FaEnvelope className="inline-block" /> Email
                    </th>
                    <th className="py-3 text-left">
                      <FaCalendarAlt className="inline-block" /> Due Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedVisitors.map((row) => (
                    <tr key={row.id} className="">
                      <td
                        className="py-2 text-[#444444] font-bold cursor-pointer z-10"
                        title={row.fullName}
                      >
                        <i className="far fa-user"></i>{" "}
                        {truncateText(row.fullName, 20)}
                      </td>
                      <td className="py-3 text-left text-[#C7C7C7]">
                        {row.id}
                      </td>
                      <td
                        className="px-5 py-2 text-[#444444] font-bold cursor-pointer z-10"
                        title={row.email}
                        onClick={() => handleEmailClick(row.email)}
                      >
                        <i className="far fa-user"></i>{" "}
                        {truncateText(row.email, 20)}
                      </td>
                      <td className="py-3 text-left text-[#C7C7C7]">
                        {row.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          {allInvitedVisitor.length > 10 && (
            <div className="flex justify-between items-center py-7 w-full">
              <div>
                <button
                  onClick={handlePreviousPage}
                  className="w-[7rem] gap-2 text-white py-2 bg-[#4F4F4F] flex justify-center items-center rounded-md text-sm"
                >
                  Previous
                </button>
              </div>
              <div>{`${currentPage}/${Math.ceil(
                allInvitedVisitor.length / 5
              )}`}</div>
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
        </div>
      </div>
    </StaffDashboardLayout>
  );
}
