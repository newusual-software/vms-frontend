/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Patch } from "../../../utils/request";
import { DialogInvite } from "../DialogInvite";

const VisitorTable = ({ allVisitor, handleDelete, truncateText }) => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [staffId, setStaffId] = useState("");

  useEffect(() => {
    const storedStaffId = localStorage.getItem("staffId");
    setStaffId(storedStaffId);
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleButtonClick = (visitorEmail) => {
    openModal();
    setEmail(visitorEmail);
    
    // Any other logic you want to perform when the button is clicked
  };

  const handleSend = (duration) => {
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
    <div className="overflow-y-auto pl-40 pt-8 w-full">
      <>
        <DialogInvite
          isOpen={isOpen}
          closeModal={closeModal}
          handleSend={handleSend}
        />
      </>
      <table className="table-auto ">
        <thead>
          <tr className="border-b text-left text-[#404040]">
            <th className="pl-5 py-4">
              <img
                className="inline-block pr-2 w-5"
                src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png"
                alt=""
              />
              Visitor
            </th>

            <th className="pl-5 py-4">
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1680872978/nem-insurance/coolicon1_gt5erz.png"
                className="inline-block pr-2 w-6"
                alt=""
              />
              ID
            </th>
            <th className="pl-5 py-4">
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1680872978/nem-insurance/coolicon_tpldbb.png"
                className="inline-block pr-2 w-6"
                alt=""
              />
              Status
            </th>

            <th className="pl-5 py-4">
              <img
                src="https//res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png"
                className="inline-block pr-2 w-5"
                alt=""
              />
              Email
            </th>
            <th className="pl-5 py-4">
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png"
                className="inline-block pr-2 w-5"
                alt=""
              />
              Duration
            </th>
            <th className="pl-5 py-4">
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1680872978/nem-insurance/delete_icon.png"
                className="inline-block pr-2 w-6"
                alt=""
              />
              Delete
            </th>
          </tr>
        </thead>

        <tbody>
          {allVisitor.map((visitor) => (
            <tr className="mt-10 font-dmSans" key={visitor._id}>
              <td
                className=" px-5 py-2 text-[#444444] font-bold cursor-pointer z-10"
                title={visitor.fullName}
              >
                <Link to={`/visitor-profile/${visitor._id}`}>
                  <i className="far fa-user"></i>{" "}
                  {truncateText(visitor.fullName, 22)}
                </Link>
              </td>

              {/* <td
                className=" px-5 py-2 text-[#828282] cursor-pointer z-10"
                title={
                  visitor.host === null || undefined || ""
                    ? "nohost"
                    : visitor.host
                }
              >
                <i className="far fa-user"></i>{" "}
                {truncateText(
                  visitor.host === null || undefined || ""
                    ? "nohost"
                    : visitor.host,
                  8
                )}
              </td> */}
              <td className=" px-5 text-[#828282] py-2">{visitor.id}</td>
              <td className=" px-5 text-[#828282] py-2">
                {visitor.invited === true ? (
                  "Invited"
                ) : (
                  <button
                    onClick={() => handleButtonClick(visitor.email)}
                    className="bg-blue-900 py-1 px-3 text-white rounded"
                  >
                    Invite
                  </button>
                )}
              </td>

              <td
                className=" px-4 py-2 text-[#828282] cursor-pointer z-10"
                title={visitor.email}
              >
                {truncateText(visitor.email, 12)}
              </td>
              <td className=" px-4 text-[#828282]  py-2">
                {visitor.duration === undefined ? "0 hours" : visitor.duration}
              </td>
              <td className=" px-5 text-[#828282] py-2">
                <button
                  className="bg-red-900 py-1 px-3 text-white rounded"
                  onClick={() => handleDelete(visitor._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitorTable;
