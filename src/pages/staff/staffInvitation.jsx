import React from 'react'
import AltTopNav from '../../components/common/altTopNav'
import StaffDashboardLayout from '../../layout/staffDashboardLayout'
import { FaUser, FaIdCard, FaEnvelope, FaCalendarAlt } from "react-icons/fa";


export default function StaffInvitation() {
  return (
    <StaffDashboardLayout>
      <div className="w-full pt-32 px-14 ">
        <AltTopNav/>
        <div className='w-[80%] rounded-lg mx-auto my-4 py-6  shadow-xl'>
          <div className="flex justify-between px-10 items-center ">
            <div className="flex pt-3 gap-3 items-center">
              <div>
                <h1 className="text-[#404040] font-dmSans font-medium">Invites Created</h1>
              </div>
              <div>
                <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_3_p6q7x8.png" alt="" />
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-[10rem] gap-3 text-white py-3 bg-[#4F4F4F] flex justify-center items-center rounded-md">
                <span>
                  <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_2_ibjtbu.png" alt="" />
                </span>
                Create Invite
              </button>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-full'>
            <table className="mt-12 w-full">
              <thead className="py-3 font-dmSans font-normal text-[#404040]">
                <tr>
                  <th className=" py-2"><FaUser className="inline-block" /> Name</th>
                  <th className=" py-2"><FaIdCard className="inline-block" /> ID</th>
                  <th className=" py-2"><FaEnvelope className="inline-block" /> Email</th>
                  <th className=" py-2"><FaCalendarAlt className="inline-block" /> Due Date</th>
                </tr>
              </thead>
              
            </table>
            <div className='flex flex-col py-24 text-center gap-5 justify-center items-center '>
              <div>
                <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680875816/nem-insurance/coolicon_qcniv0.png" alt="" />
              </div>
              <div className='text-[#BDBDBD] text-center gap-5'>
                <h3>You dont have any visit Today</h3>
                <h4>Click on “Create Invite” button on the right hand side</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StaffDashboardLayout>
  )
}
