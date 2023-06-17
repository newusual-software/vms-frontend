import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
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
import Home from "./pages/Home";
import StaffDashboard from "./pages/staff/staffDashboard";
import StaffInvitation from "./pages/staff/staffInvitation";
import StaffLogin from "./pages/staff/staffLogin";
import StaffProfileDashboard from "./pages/staff/staffProfileDashboard";
import StaffVistorLogbook from "./pages/staff/staffVistorLogbook";
import StaffVMS from "./pages/staff/staffVMS";
import Landing from "./pages/user/landing";
import PrintForm from "./pages/user/printForm";
import Register from "./pages/user/register";

// creates routes and returns router object for app

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} > 
      <Route index element={<Home />} />
      {/* user routes */}
      <Route path="/landing" element={<Landing />} />
      <Route path="/userSignUp" element={<Register />} />
      <Route path="/printForm" element={<PrintForm />} />
      {/* staff routes */}
      <Route path="/staffLogin" element={<StaffLogin />} />
      <Route path="/staffDashboard" element={<StaffDashboard />} />
      <Route path="/staffVistorLogbook" element={<StaffVistorLogbook />} />
      <Route path="/staffInvitation" element={<StaffInvitation />} />
      <Route path="/staffProfileDashboard" element={<StaffProfileDashboard />} />
      <Route path="/staffVMS" element={<StaffVMS />} />
      <Route path="/staffCheckInOrOut" element={<StaffCheckInOrOut />} />
      <Route path="/staffVisitorListing" element={<StaffVisitorListing />} />

      {/* admin routes */}
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/adminDashboard" element={<AdminDashboard />} />
      <Route path="/adminOrganizationProfile" element={<AdminOrganizationProfile />} />
      <Route path="/adminDepartmentManagement" element={<AdminDepartmentManagement />} />
      <Route path="/adminStaffManagement" element={<AdminStaffManagement />} />
      <Route path="/adminVisitorPurpose" element={<AdminVisitorPurpose />} />

    </Route>
  )
);
export default router;
