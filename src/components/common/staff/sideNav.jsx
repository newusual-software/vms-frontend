import React from "react";
import { CloudIcon } from "../../../assets/index";
import { NavLink } from "react-router-dom";


export default function SideNav() {
  let links = [
    { name: "Overview", link: "/staffDashboard", icon:"https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/Group_70_zcl6ix.png" },
    { name: "Visitors Logbook", link: "/staffVistorLogbook", icon:"https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/Group_73_oyhzxx.png"},
    { name: "Invitations", link: "/staffInvitation", icon:"https://res.cloudinary.com/phantom1245/image/upload/v1680417732/nem-insurance/Group_74_yc7c33.png" },
    { name: "Profile", link: "/staffProfileDashboard", icon:"https://res.cloudinary.com/phantom1245/image/upload/v1680417743/nem-insurance/Group_75_maus0m.png" },
    { name: "VMS", link: "/staffVMS", icon:"https://res.cloudinary.com/phantom1245/image/upload/v1680450091/nem-insurance/award_kllsdv.png" },
    { name: "Logout", link: "/#", icon:"https://res.cloudinary.com/phantom1245/image/upload/v1680450091/nem-insurance/award_kllsdv.png" }
  ];
  return (
    <div>
      <div className="sticky top-0 left-0">
        <div className=" transition-all ease-in-out duration-300  border-r-2 border-gray-200 flex flex-col items-center h-screen w-[18rem] bg-[#FFFFFF] bg-opacity-20">
          <div className="py-9 w-full bg-[#FFFFFF] bg-opacity-30 ">

            <div className="flex justify-center items-center gap-3 ">
              <div>
                <img src={ CloudIcon } alt="cloud icon" className="w-10"/>
              </div>
              <div>
                <h2 className="font-bold text-[#0F4264] text-lg font-quicksand">VMS</h2>
              </div>
            </div>

            <div className="py-20">
              <ul className="w-full flex flex-col">
                {links.map((link) => (
                  <div key={link.name}>
                    <NavLink
                      to={link.link}
                      className="" 
                    
                    >
                      <li
                   
                        className="w-full  duration-300  text-[#C7C7C7] flex items-center hover:text-[#4F4F4F] hover:bg-[#F2F2F2] rounded-md font-lato  justify-between px-8 py-3 text-md capitalize font-bold"
                      >
                    
                        <div className="flex items-center">
                          <img src={link.icon} alt={link.name} className="mr-4" />
                          <span>{link.name}</span>
                        </div>
                    
                      </li>
                    </NavLink>
                  </div>
                ))}
              </ul>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
