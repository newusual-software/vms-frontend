import React, { useState, useEffect } from "react";
import AltTopNav from "../../components/common/altTopNav";
import StaffDashboardLayout from "../../layout/staffDashboardLayout";
import { Get, Delete } from "../../utils/request";

export default function StaffVistorLogbook() {
  const [filter, setFilter] = useState("all");
  const [allVisitor, setAllVisitor] = useState([]);
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    fetchAllVisitor();

    const pollingInterval = setInterval(() => {
      fetchAllVisitor();
    }, 10000);

    return () => {
      clearInterval(pollingInterval);
    };
  }, []);

  const fetchAllVisitor = () => {
    const url = `allvisitor`;
    Get(url, (response, error) => {
      if (error) {
        console.error("Error:", error.error);
      } else {
        const data = response.visitors;
        const staffIds = data.filter((visitor) => visitor.staffId);
        setAllVisitor(data);

        if (staffIds.length > 0) {
          const staffDataArray = [];
          staffIds.forEach((staff) => {
            fetchStaffData(staff.staffId, staffDataArray);
          });
        }
      }
    });
  };

  const fetchStaffData = (id, staffDataArray) => {
    const url = `/staff/${id}`;
    Get(url, (response, error) => {
      if (error) {
        // Handle the error
        console.error("Error:", error.error);
      } else {
        const staff = response.staff;
        staffDataArray.push(staff);
        console.log(staffDataArray);
        setStaffData(staffDataArray);
      }
    });
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDelete = (userId) => {
    Delete(`/visitor/${userId}`, (data, error) => {
      if (error) {
        console.error("Error deleting user:", error);
      } else {
        console.log("User deleted successfully:", data);
        // Remove the deleted user from the allVisitor state
        setAllVisitor((prevVisitor) =>
          prevVisitor.filter((visitor) => visitor._id !== userId)
        );
      }
    });
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };
  return (
    <StaffDashboardLayout>
      <div className="w-full pt-32 px-14 ">
        <AltTopNav />
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

          <label
            htmlFor="all"
            className="flex items-center mb-3 text-[#4F4F4F]"
          >
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
        <div className="overflow-y-auto pl-40 pt-8 w-full">
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
                    src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png"
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
                    <i className="far fa-user"></i>{" "}
                    {truncateText(visitor.fullName, 22)}
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
                      <button className="bg-blue-900 py-1 px-3 text-white rounded">
                        Invite
                      </button>
                    )}
                  </td>

                  <td
                    className=" px-4 py-2 text-[#828282] cursor-pointer z-10"
                    title={visitor.email}
                  >
                    {truncateText(visitor.email, 8)}
                  </td>
                  <td className=" px-4 text-[#828282]  py-2">
                    {visitor.duration === undefined
                      ? "0 hours"
                      : visitor.duration}
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
      </div>
    </StaffDashboardLayout>
  );
}
