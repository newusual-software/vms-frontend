import React from 'react'
import AltTopNav from '../../components/common/altTopNav'
import VisitorPurpose from '../../components/molecule/admin/visitorPurpose'
import AdminDashboardLayout from '../../layout/adminDashboardLayout'

export default function AdminVisitorPurpose() {
  return (
    <AdminDashboardLayout>
      <AltTopNav/>
      <div className='w-[80%] rounded-lg mx-auto my-4 py-6 px-5 shadow-xl'>
        <div className="flex justify-between items-center ">
          <div className="flex gap-3 items-center">
            <div>
              <h1 className="text-[#404040] text-lg font-dmSans font-medium">Visitor Purposes</h1>
            </div>
            <div>
              <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_3_p6q7x8.png" alt="" />
            </div>
          </div>
          <div>
            <button className="w-[12rem]  font-bold font-lato text-md gap-3 text-white py-3 bg-[#4F4F4F] flex justify-center items-center rounded-md">
              <span>
                <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_2_ibjtbu.png" alt="" />
              </span>
                Create Purpose
            </button>
          </div>
        </div>
        <main>
          <VisitorPurpose />
          <div className="flex justify-end items-center py-7 w-full">
            <div className="pr-4">1/24</div>
            <div>
              <button className="w-[7rem] gap-3 text-white py-3 bg-[#4F4F4F] flex justify-center items-center rounded-md">
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </AdminDashboardLayout>
  )
}
