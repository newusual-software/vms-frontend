import React from "react";
import AdminSideNav from "../components/common/admin/sideNav";
import TopNav from "../components/common/admin/topNav";


// eslint-disable-next-line react/prop-types
export default function AdminDashboardLayout({children}) {
  return (
    <div>
      <div className="flex flex-row ">
        <section className=" fixed top-0 left-0 z-[333]">
          <AdminSideNav />
        </section>
        <main className="w-full pl-[17rem] z-[1]">
          <section className="w-full fixed pt-10 left-0 bg-white ">
            <TopNav />
          </section>
          <div className="w-full pt-32 px-14 ">
            {children}
          </div>   
        </main>
      </div>
    </div>
  );
}
