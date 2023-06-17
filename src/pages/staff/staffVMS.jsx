import { useNavigate } from 'react-router-dom'
import StaffDashboardLayout from '../../layout/staffDashboardLayout'

export default function StaffVMS() {
  const navigate = useNavigate();

  const handleClick =()=>{
    navigate("/staffCheckInOrOut")
  }
  const handleListing = () => {
    navigate("/staffVisitorListing")
  }
  return (
    <StaffDashboardLayout>
      <div className="w-full pt-32 px-40 ">
        <div className="font-dmSans font-bold text-center text-2xl pt-14 ">Choose How You Would Like To Continue</div>
        <div className='font-dmSans text-[#BDBDBD] text-center text-lg font-bold pb-14 pt-3'>Select any of the two options</div>
        <div className='flex gap-14 justify-center items-center flex-col md:flex-row w-full'>

          <div className='w-1/2 flex justify-center items-center cursor-pointer' onClick={handleClick}>
            <div className="py-8 px-14 w-full md:h-[8rem] mx-auto bg-white rounded-xl shadow filter drop-shadow-lg space-y-6 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <img className="block w-10" src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/group_vi3hmp.png" alt=""/>
              <div className="text-center space-y-2 sm:text-left">
                <div className="w-[7rem] font-lato font-bold text-lg">
                   Visitors’ Check in/out
                </div>
              </div>
            </div>
          </div>

          <div className='w-1/2 flex justify-start items-center cursor-pointer' onClick={handleListing}>
            <div className="py-8 px-14 w-full md:h-[8rem]  bg-white rounded-xl shadow filter drop-shadow-lg space-y-6 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <img className="block w-10" src="https://res.cloudinary.com/phantom1245/image/upload/v1680971002/nem-insurance/coolicon_n8qfe9.png" alt="Woman's Face"/>
              <div className="text-center space-y-2 sm:text-left">
                <div className="w-[6rem] font-lato font-bold text-lg">
                    Visitors’ Listing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StaffDashboardLayout>
  )
}
