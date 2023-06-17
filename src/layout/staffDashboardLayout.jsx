import React from "react";
import SideNav from "../components/common/staff/sideNav";
import TopNav from "../components/common/staff/topNav";


// eslint-disable-next-line react/prop-types
export default function StaffDashboardLayout({children}) {
  return (
    <div>
      <div className="flex flex-row ">
        <section className=" fixed top-0 left-0 z-[333]">
          <SideNav />
        </section>
        <main className="w-full pl-[17rem] z-[1]">
          <section className="w-full fixed pt-10 left-0 bg-white ">
            <TopNav />
          </section>
          {children}
          
        </main>
      </div>
    </div>
  );
}
