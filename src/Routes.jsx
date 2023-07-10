/* eslint-disable react/prop-types */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "./App";
import StaffCheckInOrOut from "./components/molecule/checkInOrOut";
import StaffVisitorListing from "./components/molecule/staff/staffVisitorListing";
import AdminDashboard from "./pages/admin/adminDashboard";
import AdminDepartmentManagement from "./pages/admin/adminDepartmentManagement";
import AdminLogin from "./pages/admin/adminLogin";
import AdminOrganizationProfile from "./pages/admin/adminOrganizationProfile";
import AdminStaffManagement from "./pages/admin/adminStaffManagement";
import AdminVisitorPurpose from "./pages/admin/adminVisitorPurpose";
import StaffDashboard from "./pages/staff/staffDashboard";
import StaffInvitation from "./pages/staff/staffInvitation";
import StaffLogin from "./pages/staff/staffLogin";
import StaffProfileDashboard from "./pages/staff/staffProfileDashboard";
import StaffVisitorLogbook from "./pages/staff/staffVisitorLogbook";
import StaffLogout from "./pages/staff/staffLogout";
import StaffVMS from "./pages/staff/staffVMS";
import Landing from "./pages/user/landing";
import PrintForm from "./pages/user/printForm";
import Register from "./pages/user/register";
import { isAuthenticated } from "./utils/isAuthenticated";

const ProtectedRoute = ({ element }) => {
  const authenticated = isAuthenticated();

  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  return element;
};

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="/userSignUp" element={<Register />} />
          <Route path="/printForm" element={<PrintForm />} />

          <Route path="/staffLogin" element={<StaffLogin />} />
          <Route
            path="/staffDashboard"
            element={
              <ProtectedRoute
                path="/staffDashboard"
                element={<StaffDashboard />}
              />
            }
          />

          <Route
            path="/staffVisitorLogbook"
            element={
              <ProtectedRoute
                path="/staffVisitorLogbook"
                element={<StaffVisitorLogbook />}
              />
            }
          />
          <Route
            path="/staffInvitation"
            element={
              <ProtectedRoute
                path="/staffInvitation"
                element={<StaffInvitation />}
              />
            }
          />
          <Route
            path="/staffProfileDashboard"
            element={
              <ProtectedRoute
                path="/staffProfileDashboard"
                element={<StaffProfileDashboard />}
              />
            }
          />
          <Route
            path="/staffVMS"
            element={<ProtectedRoute path="/staffVMS" element={<StaffVMS />} />}
          />
          <Route
            path="/staffCheckInOrOut/:id"
            element={
              <ProtectedRoute
                path="/staffCheckInOrOut/:id"
                element={<StaffCheckInOrOut />}
              />
            }
          />
          <Route
            path="/staffVisitorListing"
            element={
              <ProtectedRoute
                path="/staffVisitorListing"
                element={<StaffVisitorListing />}
              />
            }
          />
          <Route
            path="/logout"
            element={
              <ProtectedRoute path="/logout" element={<StaffLogout />} />
            }
          />

          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route
            path="/adminDashboard"
            element={
              <ProtectedRoute
                path="/adminDashboard"
                element={<AdminDashboard />}
              />
            }
          />
          <Route
            path="/adminOrganizationProfile"
            element={
              <ProtectedRoute
                path="/adminOrganizationProfile"
                element={<AdminOrganizationProfile />}
              />
            }
          />
          <Route
            path="/adminDepartmentManagement"
            element={
              <ProtectedRoute
                path="/adminDepartmentManagement"
                element={<AdminDepartmentManagement />}
              />
            }
          />
          <Route
            path="/adminStaffManagement"
            element={
              <ProtectedRoute
                path="/adminStaffManagement"
                element={<AdminStaffManagement />}
              />
            }
          />
          <Route
            path="/adminVisitorPurpose"
            element={
              <ProtectedRoute
                path="/adminVisitorPurpose"
                element={<AdminVisitorPurpose />}
              />
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;