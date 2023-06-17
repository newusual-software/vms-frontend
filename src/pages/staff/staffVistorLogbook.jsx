import React, { useState } from 'react';
import AltTopNav from '../../components/common/altTopNav';
import StaffDashboardLayout from '../../layout/staffDashboardLayout'

const visitors = [
  {
    name: "John Doe",
    host: "Acme Corporation",
    id: "#123456",
    checkIn: "14:00 WAT",
    checkOut: "14:00 WAT",
    email: "johndoe@example.com",
    duration: "2 hours",
  },
  {
    name: "Jane Smith",
    host: "XYZ Corporation",
    id: "#78912",
    checkIn: "14:00 WAT",
    checkOut: "14:00 WAT",
    email: "janesmith@example.com",
    duration: "4 hours",
  },
  {
    name: "Jane Smith",
    host: "XYZ Corporation",
    id: "#79012",
    checkIn: "14:00 WAT",
    checkOut: "14:00 WAT",
    email: "janesmith@example.com",
    duration: "4 hours",
  },
  {
    name: "Jane Smith",
    host: "XYZ Corporation",
    id: "#78902",
    checkIn: "14:00 WAT",
    checkOut: "14:00 WAT",
    email: "janesmith@example.com",
    duration: "4 hours",
  },
];

export default function StaffVistorLogbook() {
  const [filter, setFilter] = useState('all');
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };
  return (
    <StaffDashboardLayout>
      <div className="w-full pt-32 px-14 ">
        <AltTopNav/>
        <div className="fixed font-dmSans left-42 top-52 h-full w-40 border-r border-gray-300 flex flex-col items-start justify-start">
          <div className='flex items-center mb-5 gap-3'>
            <div>
              <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680787103/nem-insurance/coolicon_nneo1s.png" alt="" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#4F4F4F]">Filter</h2>
            </div>
          </div>
         
          <label htmlFor="all" className="flex items-center mb-3 text-[#4F4F4F]">
            <input
              type="checkbox"
              id="all"
              name="all"
              value="all"
              checked={filter === 'all'}
              onChange={handleFilterChange}
              className="mr-2"
            />
        All
          </label>
          <label htmlFor="expected" className="flex items-center text-[#4F4F4F] mb-3">
            <input
              type="checkbox"
              id="expected"
              name="expected"
              value="expected"
              checked={filter === 'expected'}
              onChange={handleFilterChange}
              className="mr-2"
            />
        Expected
          </label>
          <label htmlFor="check-in" className="flex items-center text-[#4F4F4F] mb-3">
            <input
              type="checkbox"
              id="check-in"
              name="check-in"
              value="check-in"
              checked={filter === 'check-in'}
              onChange={handleFilterChange}
              className="mr-2"
            />
        Check In
          </label>
          <label htmlFor="check-out" className="flex items-center text-[#4F4F4F] mb-3">
            <input
              type="checkbox"
              id="check-out"
              name="check-out"
              value="check-out"
              checked={filter === 'check-out'}
              onChange={handleFilterChange}
              className="mr-2"
            />
        Check Out
          </label>
        </div>
        <div className="overflow-y-auto pl-40 pt-8 w-full">
          <table className="table-auto ">
            <thead>
              <tr className='border-b text-left text-[#404040]'>
                <th className="pl-5 py-4">
                  <img className='inline-block pr-2 w-5' src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png" alt="" />
                  Visitor</th>
                <th className="pl-5 py-4">
                  <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/group_vi3hmp.png" className='inline-block pr-2 w-6' alt="" />
                  Host</th>
                <th className="pl-5 py-4">
                  <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680872978/nem-insurance/coolicon1_gt5erz.png" className='inline-block pr-2 w-6' alt="" />
                  ID</th>
                <th className="pl-5 py-4">
                  <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680872978/nem-insurance/coolicon_tpldbb.png" className='inline-block pr-2 w-6' alt="" />
                  Check In</th>
                <th className="pl-5 py-4">
                  <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png" className='inline-block pr-2 w-5' alt="" />
                  Check Out</th>
                <th className="pl-5 py-4">
                  <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png" className='inline-block pr-2 w-5' alt="" />
                  Email</th>
                <th className="pl-5 py-4">
                  <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png" className='inline-block pr-2 w-5' alt="" />
                  Duration</th>
              </tr>
            </thead>
            <tbody >
              {visitors.map((visitor) => (
                <tr className='mt-10 font-dmSans' key={visitor.id}>
                  <td
                    className=" px-5 py-2 text-[#444444] font-bold cursor-pointer z-10"
                    title={visitor.name}
                  >
                    <i className="far fa-user"></i>{" "}
                    {truncateText(visitor.name, 8)}
                  </td>
                  <td
                    className=" px-5 py-2 text-[#828282] cursor-pointer z-10"
                    title={visitor.host}
                  >
                    <i className="far fa-user"></i>{" "}
                    {truncateText(visitor.host, 8)}
                  </td>
                  <td className=" px-5 text-[#828282] py-2">{visitor.id}</td>
                  <td className=" px-5 text-[#828282] py-2">{visitor.checkIn}</td>
                  <td className=" px-5 text-[#828282] py-2">{visitor.checkOut}</td>
                  <td
                    className=" px-4 py-2 text-[#828282] cursor-pointer z-10"
                    title={visitor.email}
                  >
                    {truncateText(visitor.email, 8)}
                  </td>
                  <td className=" px-4 text-[#828282]  py-2">{visitor.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </StaffDashboardLayout>
  )
}
