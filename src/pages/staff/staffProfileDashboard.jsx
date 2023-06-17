import React from 'react'
import StaffProfile from '../../components/molecule/staff/staffProfile';
import StaffDashboardLayout from '../../layout/staffDashboardLayout'

const data = [
  { category: "Email", information: "tanya.edwards@gmail.com" },
  { category: "Phone", information: "(239) 555-0108" },
  { category: "Address", information: "6391 Elgin St Celina, Delaware" },
  { category: "Employer ID", information: "233456678" },
  { category: "Password", information: "*************" },
  { category: "Department", information: "Sales Division" },
  { category: "DOB", information: "1985-06-15" },
  { category: "Gender", information: "Male" }
];

export default function StaffProfileDashboard() {
  return (
    <StaffDashboardLayout>
      <div className="w-full pt-32 px-14 ">
        <div className='w-[60%] mx-auto'>
          <div className='flex flex-row gap-1 justify-end items-center'>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_5_exq9dm.png" alt="" />
            <div className='text-[#BDBDBD]'>Edit</div>
          </div>
          <div className='flex flex-row pt-8 justify-start gap-5 items-start'>
            <div>
              <img className='w-full' src="https://res.cloudinary.com/phantom1245/image/upload/v1680876914/nem-insurance/Ellipse_20_thzbpg.png" alt="" />
            </div>
            <div className='block font-montserrat text-[#434343] pt-6'>
              <div className="font-bold text-3xl ">Tanya Edwards</div>
              <h3>(239) 555-0108</h3>
            </div>
            
          </div>
          <div>
            <StaffProfile data={data} />
          </div>
        </div>
      </div>  
    </StaffDashboardLayout>
  )
}
