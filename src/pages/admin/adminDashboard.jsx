import React from "react";
import SideNav from "../../components/common/admin/sideNav";
import TopNav from "../../components/common/admin/topNav";
import TopStaff from "../../components/molecule/admin/topStaff";
import OverviewSummary from "../../components/molecule/overviewSummary";
import StaffVisitationHistory from "../../components/molecule/staff/staffVisitationHistory";

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex flex-row ">
        <section className=" sticky top-0 left-0 z-[333]">
          <SideNav />
        </section>
        <main className="w-full z-[1]">
          <section className="w-full fixed pt-10 left-0 bg-white ">
            <TopNav />
          </section>
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
                <TopStaff />

              </section>
            </div>
          </div>
          
        </main>
      </div>
    </div>
  );
}
