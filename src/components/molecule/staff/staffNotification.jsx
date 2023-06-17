import React from "react";
import StaffNotificationTable from "./staffNotificationTable";

export default function StaffNotification() {
  return (
    <div className="shadow-xl py-5 mt-14 rounded-3xl px-3">
      <div className="flex justify-between items-center ">
        <div className="flex gap-3 items-center">
          <div>
            <h1 className="text-[#404040] font-dmSans font-medium">Notifications</h1>
          </div>
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680729104/nem-insurance/coolicon_gzggz9.png" alt="" />
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417732/nem-insurance/Group_74_yc7c33.png" alt="" />
          </div>
          <div>
            <h3 className="text-[#BDBDBD] font-dmSans font-medium">Today</h3>
          </div>
        </div>
      </div>
      <main>
        <StaffNotificationTable />
      </main>
    </div>
  );
}
