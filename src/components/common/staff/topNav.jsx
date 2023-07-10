import React, { useState, useEffect } from "react";
import {
  CrossIcon,
  MailIcon,
  UserAvatarIcon,
  NotificationIcon,
} from "../../../assets/index";
import { GlobalDialog } from "../../molecule/GlobalDialogInvite";
import { Patch, Get } from "../../../utils/request";
import { useNavigate } from "react-router-dom";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [staffId, setStaffId] = useState("");
  const [staffName, setStaffName] = useState("")
  let navigate = useNavigate()

  useEffect(() => {
    const storedStaffId = localStorage.getItem("staffId");
    setStaffId(storedStaffId);
    if (storedStaffId) {
      fetchStaffData(storedStaffId);
    }
  }, []);

  const fetchStaffData = (id) => {
    const url = `/staff/${id}`;
    Get(url, (response, error) => {
      if (error) {
        // Handle the error
        console.error("Error:", error.error);
      } else {
        // Handle the successful response
        setStaffName(response.staff.fullName);
      }
    });
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
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };
  return (
    <div className="flex justify-end items-center">
      <div className="flex w-1/2 justify-between items-center">
        <div className="flex justify-start items-start">
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
        <div className="flex gap-3 pr-4 justify-center items-center">
          <div>
            <img src={MailIcon} alt="" />
          </div>
          <div>
            <img src={NotificationIcon} alt="" />
          </div>
          <div  className="bg-[#FFC145] rounded-full">
            <img src={UserAvatarIcon} alt="" />
          </div>
          <div className="flex cursor-pointer flex-col leading-[1.3rem]" onClick={() => navigate("/staffProfileDashboard")}>
            <h1
              className="text-[#404040] capitalize font-bold font-dmSans text-md"
              title={!staffName ? "john doe" : staffName}
            >
              <i className="far fa-user"></i>{" "}
              {truncateText(!staffName ? "john doe" : staffName, 10)}
            </h1>
            <h3 className="text-[#AEAEAE] font-medium font-dmSans text-md">
              Staff account
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
