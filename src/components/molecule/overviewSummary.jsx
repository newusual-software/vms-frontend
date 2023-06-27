import React, { useState, useEffect } from "react";
import axios from "axios";

export default function OverviewSummary() {
  const [allVisitor, setAllVisitor] = useState([]);
  const [allInvitedVisitor, setAllInvitedVisitor] = useState([]);
  const [allNotInvitedVisitor, setAllNotInvitedVisitor] = useState([]);
  const [totalStaffInvite, setTotalStaffInvite] = useState(0);

  useEffect(() => {
    fetchAllVisitor();
    fetchStaffVisitor();
    fetchInvitedVisitor();
    fetchNonInvitedVisitor();

    // Start polling every 10 seconds
    const pollingInterval = setInterval(() => {
      fetchAllVisitor();
      fetchStaffVisitor();
      fetchInvitedVisitor();
      fetchNonInvitedVisitor();
    }, 10000); // 5 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(pollingInterval);
    };
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

  const fetchStaffVisitor = () => {
    const apiUrl = `https://vms-backend.up.railway.app/api/allvisitor`;
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        const visitors = data.visitors;
        const staffId = localStorage.getItem("staffId");
        // Get the current staff ID
        const currentStaffId = staffId;

        // Filter the visitors array based on the staffId matching the currentStaffId
        const staffVisitors = visitors.filter(
          (visitor) => visitor.staffId === currentStaffId
        );

        setTotalStaffInvite(staffVisitors.length);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchInvitedVisitor = () => {
    const apiUrl = `https://vms-backend.up.railway.app/api/invited-visitor`;
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        setAllInvitedVisitor(data.visitors);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchNonInvitedVisitor = () => {
    const apiUrl = `https://vms-backend.up.railway.app/api/not-invited-visitor`;
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        setAllNotInvitedVisitor(data.visitors);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full flex flex-row justify-between items-center gap-8">
      <div className="w-[25%] bg-white shadow-xl rounded-2xl flex flex-col justify-center item-center">
        <div className="w-full flex flex-col justify-center item-center">
          <div className="w-full pt-14">
            <h1 className="w-full font-dmSans text-center text-[#828282] font-bold text-5xl">
              {allVisitor.length}
            </h1>
          </div>
          <div className="flex flex-col gap-2 pt-10 pb-4 justify-center items-center">
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png"
              alt=""
              className="w-6"
            />
            <h2 className="text-[#4F4F4F]">Total Visitor</h2>
          </div>
        </div>
      </div>
      <div className="w-[25%] bg-white shadow-xl rounded-2xl flex flex-col justify-center item-center">
        <div className="w-full flex flex-col justify-center item-center">
          <div className="w-full pt-14">
            <h1 className="w-full font-dmSans text-center text-[#828282] font-bold text-5xl">
              {allInvitedVisitor.length}
            </h1>
          </div>

          <div className="flex flex-col gap-2 pt-10 pb-4 justify-center items-center">
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/group_vi3hmp.png"
              alt=""
              className="w-6"
            />
            <h2 className="text-[#4F4F4F]">Invited Visitor</h2>
          </div>
        </div>
      </div>
      <div className="w-[25%] bg-white shadow-xl rounded-2xl flex flex-col justify-center item-center">
        <div className="w-full flex flex-col justify-center item-center">
          <div className="w-full pt-14">
            <h1 className="w-full font-dmSans text-center text-[#828282] font-bold text-5xl">
              {totalStaffInvite}
            </h1>
          </div>

          <div className="flex flex-col gap-2 pt-10 pb-4 justify-center items-center">
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1680417732/nem-insurance/decline_ser_kin2b7.png"
              alt=""
              className="w-6"
            />
            <h2 className="text-[#4F4F4F]">My Invites</h2>
          </div>
        </div>
      </div>
      <div className="w-[25%] bg-white shadow-xl rounded-2xl flex flex-col justify-center item-center">
        <div className="w-full flex flex-col justify-center item-center">
          <div className="w-full pt-14">
            <h1 className="w-full font-dmSans text-center text-[#828282] font-bold text-5xl">
              {allNotInvitedVisitor.length}
            </h1>
          </div>
          <div className="flex flex-col gap-2 pt-10 pb-4 justify-center items-center">
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_1_eytqcc.png"
              alt=""
              className="w-6"
            />
            <h2 className="text-[#4F4F4F]">Pending Invites</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
