import React from 'react'
import StaffDashboardLayout from '../../../layout/staffDashboardLayout'
import AltTopNav from '../../common/altTopNav'

const visitors = [
  {
    name: "John Roland",
    mobile: "0912 665 8621",
    id: "1",
    department: "Accounting",
    email: "johndoe@example.com",
    duration: "05/04/92",
  },
  {
    name: "Elimihele Godsfavour",
    mobile: "0912 665 8621",
    id: "2",
    department: "Accounting",
    email: "johndoe@example.com",
    duration: "05/04/92",
  },
];
export default function StaffVisitorListing() {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };
  return (
    <StaffDashboardLayout>
      <div className="pt-32 px-14 overflow-y-auto">
        <AltTopNav />
        <div className='w-[80%] rounded-lg mx-auto my-4 py-6  shadow-xl'>
          <div className="flex justify-between px-10 items-center ">
            <div className="flex pt-3 gap-3 items-center">
              <div>
                <h1 className="text-[#404040] text-xl font-dmSans font-medium">Visitor Listing</h1>
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
                Create Staff
              </button>
            </div>
          </div>
          <div className='pt-8 w-full'>
            <table className="table-auto w-full">
              <thead>
                <tr className='border-b text-left text-[#404040]'>
                  <th className="pl-5 py-4">
                    <img className='inline-block pr-2 w-5' src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png" alt="" />
                  S/N</th>
                  <th className="pl-5 py-4">
                    <img className='inline-block pr-2 w-5' src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png" alt="" />
                  Full Name</th>
                  <th className="pl-5 py-4">
                    <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/group_vi3hmp.png" className='inline-block pr-2 w-6' alt="" />
                  Email</th>
                  <th className="pl-5 py-4">
                    <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680872978/nem-insurance/coolicon1_gt5erz.png" className='inline-block pr-2 w-6' alt="" />
                  Department</th>
                  <th className="pl-5 py-4">
                    <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680872978/nem-insurance/coolicon_tpldbb.png" className='inline-block pr-2 w-6' alt="" />
                  mobile</th>
                  <th className="pl-5 py-4">
                    <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png" className='inline-block pr-2 w-5' alt="" />
                  DOB</th>

                </tr>
              </thead>
              <tbody >
                {visitors.map((visitor) => (
                  <tr className='mt-10 font-dmSans' key={visitor.id}>
                    <td className=" px-5 text-[#828282] py-2">{visitor.id}</td>
                    <td
                      className=" px-5 py-2 text-[#444444] font-bold cursor-pointer z-10"
                      title={visitor.name}
                    >
                      <i className="far fa-user"></i>{" "}
                      {truncateText(visitor.name, 8)}
                    </td>
                    <td
                      className=" px-4 py-2 text-[#828282] cursor-pointer z-10"
                      title={visitor.email}
                    >
                      {truncateText(visitor.email, 8)}
                    </td>
                    
                    <td className=" px-5 text-[#828282] py-2">{visitor.department}</td>
                    <td className=" px-5 text-[#828282] py-2">{visitor.mobile}</td>
                   
                    <td className=" px-4 text-[#828282]  py-2">{visitor.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end items-center py-9 pr-9 w-full">
            <div className="pr-4">1/1</div>
            <div>
              <button className="w-[7rem] gap-3 text-white py-3 bg-[#4F4F4F] flex justify-center items-center rounded-md">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </StaffDashboardLayout>
  )
}
