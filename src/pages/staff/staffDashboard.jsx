import React from "react";
import OverviewSummary from "../../components/molecule/overviewSummary";
import StaffNotification from "../../components/molecule/staff/staffNotification";
import StaffRecentVist from "../../components/molecule/staff/staffRecentVist";
import StaffVisitationHistory from "../../components/molecule/staff/staffVisitationHistory";
import StaffDashboardLayout from "../../layout/staffDashboardLayout";

export default function StaffDashboard() {
  return (
    <StaffDashboardLayout>
      <div className="pt-32 px-14 overflow-y-auto">
        <section>
          <OverviewSummary />
        </section>
        <div className="my-20 border-t-2 w-full  border-gray-200"></div>
        <div className="flex w-full gap-8">
          <section className="w-[70%] py-8">
            <StaffVisitationHistory />
          </section>
          <section className="w-[30%] gap-9">
            <StaffRecentVist />
            <StaffNotification />
          </section>
        </div>
      </div>
    </StaffDashboardLayout>

  );
}
