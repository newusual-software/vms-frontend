import React from 'react'
import OrganizationProfile from '../../components/molecule/admin/organizationProfile';
import AdminDashboardLayout from '../../layout/adminDashboardLayout'

const data = [
  { category: "Email", information: "tanya.edwards@gmail.com" },
  { category: "Phone", information: "(239) 555-0108" },
  { category: "Address", information: "6391 Elgin St Celina, Delaware" },
  { category: "FAX", information: "233456678" },
  { category: "Password", information: "*************" },
  { category: "Master Security Pass", information: "*************" },

];
export default function AdminOrganizationProfile() {
  return (
    <AdminDashboardLayout>
      <div className='w-[60%] mx-auto'>
        <div className='flex flex-row gap-1 justify-end cursor-pointer items-center'>
          <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_5_exq9dm.png" alt="" />
          <div className='text-[#BDBDBD]'>Edit</div>
        </div>
        <div className='flex flex-row pt-8 justify-start gap-5 items-start'>
          <div>
            <img className='w-full' src="https://res.cloudinary.com/phantom1245/image/upload/v1680876914/nem-insurance/Ellipse_20_thzbpg.png" alt="" />
          </div>
          <div className='block font-montserrat text-[#434343] pt-6'>
            <div className="font-bold text-3xl ">MMX PLS</div>
            <h3>(239) 555-0108</h3>
          </div>
            
        </div>
        <div>
          <OrganizationProfile data={data} />
        </div>
      </div>
    </AdminDashboardLayout>
  )
}
