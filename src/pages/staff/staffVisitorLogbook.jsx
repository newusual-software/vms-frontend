import React, { useState, useEffect } from "react";
import AltTopNav from "../../components/common/altTopNav";
import StaffDashboardLayout from "../../layout/staffDashboardLayout";
import { Get, Delete } from "../../utils/request";
import FilterOptions from "../../components/molecule/staff/FilterOptions";
import VisitorTable from "../../components/molecule/staff/VisitorTable";


export default function StaffVisitorLogbook() {
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
        console.error("Error:", error.error);
      } else {
        const staff = response.staff;
        staffDataArray.push(staff);
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
        <FilterOptions
          filter={filter}
          handleFilterChange={handleFilterChange}
        />
        <VisitorTable
          allVisitor={allVisitor}
          handleDelete={handleDelete}
          truncateText={truncateText}
        />
      </div>
    </StaffDashboardLayout>
  );
}
