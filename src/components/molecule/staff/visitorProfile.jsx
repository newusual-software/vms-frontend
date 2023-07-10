import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/common/header";
import {
  Calender,
  UserIcon,
  ContactIcon,
  PhoneIcon,
  TimeIcon,
  QueryIcon,
  AlarmIcon,
} from "../../../assets/index";
import axios from "axios";
import { Get } from "../../../utils/request";

const VisitorProfile = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [userDetail, setUserDetail] = useState(null);
  const [staffId, setStaffId] = useState("");
  const [staffName, setStaffName] = useState("");
  
  const { id } = useParams();

  useEffect(() => {
    fetchUserDetails();
    fetchStaffData()
  }, []);

  const fetchUserDetails = () => {
    const apiUrl = `https://vms-backend.up.railway.app/api/visitor/${id}`;
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        setStaffId(data.visitor.staffAdminId);
        setUserDetail(data.visitor);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const fetchStaffData = () => {
    if (staffId) {
      const url = `/staff/${staffId}`;
      Get(url, (response, error) => {
        if (error) {
          console.error("Error:", error.error);
        } else {
          const staff = response.staff;

          setStaffName(staff.fullName);
        }
      });
    }
  };
  useEffect(() => {
    if (userDetail) {
      setUserDetails([
        {
          icon: UserIcon,
          title: "ID",
          value: userDetail.id || "NU2041A/291",
          valueExtra: "",
        },
        {
          icon: UserIcon,
          title: "Full Name",
          value: userDetail.fullName || "",
          valueExtra: userDetail.valueExtra || "",
        },
        {
          icon: ContactIcon,
          title: "Email Address",
          value: userDetail.email || "",
          valueExtra: "",
        },
        {
          icon: PhoneIcon,
          title: "Phone Number",
          value: userDetail.phoneNumber || "",
          valueExtra: "",
        },
        {
          icon: Calender,
          title: "Date",
          value: userDetail.date || "",
          valueExtra: "",
        },
        {
          icon: TimeIcon,
          title: "Time",
          value: userDetail.time || "",
          valueExtra: "WAT",
        },
        {
          icon: QueryIcon,
          title: "Reason for Visit (Optional)",
          value: userDetail.purposeOfVisit || "",
          valueExtra: "",
        },
        {
          icon: AlarmIcon,
          title: "Invite Status",
          value: `${userDetail?.invited == false ? "not invited" : "invited"}`,
          valueExtra: "",
        },
        {
          icon: AlarmIcon,
          title: `${
            userDetail?.createdByStaff == false ? null : "scheduled by:"
          }`,
          value: `${userDetail?.staffAdminId == null || undefined ? null : staffName}`,
          valueExtra: "",
        },
      ]);
    }
  }, [userDetail]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <Header />
      <div className="my-10">
        <h1 className="text-black font-dmSans font-bold text-4xl text-center">
          Visitor Profile:{" "}
          <span className="text-[#828282]">{userDetail && userDetail.id}</span>
        </h1>
      </div>
      <div className="py-8 w-full flex flex-col justify-center items-center">
        {userDetails.map((userDetail) => (
          <div
            key={userDetail.title}
            className="w-[70%] pt-7 h-full font-roboto flex justify-between items-center"
          >
            <div className="flex justify-center items-center gap-3">
              <div>
                <img src={userDetail.icon} alt="" />
              </div>
              <div>
                <h3 className="w-full px-4 py-2">{userDetail.title}</h3>
              </div>
            </div>

            <div className="text-left w-[20rem]">
              <h3 className="px-4 py-2">
                {userDetail.value} <span>{userDetail.valueExtra}</span>
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex py-10 justify-end items-center pr-10">
        <button
          type="button"
          className="bg-[#4F4F4F] font-bold w-[10rem] py-3 text-white rounded-lg outline-none border-none font-dmSans"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default VisitorProfile;
