import React from "react";
import { useNavigate } from "react-router-dom";
import StaffDashboardLayout from "../../layout/staffDashboardLayout";

export default function StaffLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();

    // Clear cookies (if applicable)
    // document.cookie = 'cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Navigate back to the home page
    navigate("/");
  };

  return (
    <StaffDashboardLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Logout Page</h1>
        <p className="text-lg mb-8">Are you sure you want to logout?</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </StaffDashboardLayout>
  );
}
