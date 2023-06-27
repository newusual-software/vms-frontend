import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";

export default function OverviewSummary() {
  const [allVisitor, setAllVisitor] = useState([]);
  const [allInvitedVisitor, setAllInvitedVisitor] = useState([]);
  const [allNotInvitedVisitor, setAllNotInvitedVisitor] = useState([]);
  const [totalStaffInvite, setTotalStaffInvite] = useState(0);

  useEffect(() => {
    const socket = io("https://vms-backend.up.railway.app");

    // Listen for 'visitorDataUpdated' event from the server
    socket.on("visitorDataUpdated", () => {
      fetchAllVisitor();
      fetchStaffVisitor();
      fetchInvitedVisitor();
      fetchNonInvitedVisitor();
    });

    fetchAllVisitor();
    fetchStaffVisitor();
    fetchInvitedVisitor();
    fetchNonInvitedVisitor();

    // Clean up the socket connection
    return () => {
      socket.disconnect();
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
        const staffVisitors = visitors.filter((visitor) => visitor.staffId);
        const staffIds = staffVisitors.map((visitor) => visitor.staffId);

        // Count the number of matches
        let totalStaffInvite = 0;
        staffIds.forEach((id) => {
          if (id === currentStaffId) {
            totalStaffInvite++;
          }
        });

        setTotalStaffInvite(totalStaffInvite);
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
              {allVisitor.length > 0 ? allVisitor.length : 0}
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
              {allInvitedVisitor.length > 0 ? allInvitedVisitor.length : 0}
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
              {allNotInvitedVisitor.length > 0
                ? allNotInvitedVisitor.length
                : 0}
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
