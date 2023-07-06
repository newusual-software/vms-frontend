import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StaffNotificationTable() {
  const [staffVisitorToday, setStaffVisitorToday] = useState([]);
  useEffect(() => {
    fetchStaffVisitor();

    // Start polling every 10 seconds
    const pollingInterval = setInterval(() => {
      fetchStaffVisitor();
    }, 10000); // 5 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(pollingInterval);
    };
  }, []);
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

        const currentDate = new Date().toISOString().slice(0, 10);
        const staffVisitors = visitors.filter(
          (visitor) => visitor.staffId === currentStaffId
        );

        const matchingStaffVisitors = staffVisitors.filter(
          (visitor) => visitor.date === currentDate
        );
        setStaffVisitorToday(matchingStaffVisitors);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };
  return (
    <div className="w-full py-4">
      {staffVisitorToday.length === 0 ? (
        <div className=" flex justify-center flex-col gap-5 items-center">
          <p>No schedule today</p>
          <button
            className="w-[14rem] gap-3 text-white py-3 bg-[#4F4F4F] flex justify-center items-center rounded-md"
          >
            Invite pending Visitors
          </button>
          
        </div>
      ) : (
        <table className="w-full">
          <tbody>
            {staffVisitorToday.map((row) => (
              <tr key={row.id} className=" flex justify-between items-center">
                <td
                  className=" px-2 py-2 text-[#444444] font-bold cursor-pointer z-10"
                  title={row.fullName}
                >
                  <i className="far fa-user"></i>{" "}
                  {truncateText(row.fullName, 9)}
                </td>
                <td className="py-1 text-[#C7C7C7]">{row.time}</td>
                <td className="w-[5rem] gap-3 text-white py-2 my-1 bg-[#4F4F4F] flex justify-center items-center rounded-md">
                  {row.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
