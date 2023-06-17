import React from "react";

export default function StaffRecentVist() {
  const contributors = [
    { handle: "johndoe", avatarUrl: "https://res.cloudinary.com/phantom1245/image/upload/v1680721110/nem-insurance/avatar2_ona21s.png" },
    { handle: "janedoe", avatarUrl: "https://res.cloudinary.com/phantom1245/image/upload/v1680721110/nem-insurance/avatar3_hhjljq.png" },
    { handle: "bobsmith", avatarUrl: "https://res.cloudinary.com/phantom1245/image/upload/v1680721110/nem-insurance/avatar4_cirs7q.png" },
    { handle: "bobsmth", avatarUrl: "https://res.cloudinary.com/phantom1245/image/upload/v1680721110/nem-insurance/avatar1_apkymp.png" }
  ];
  return (
    <div className="shadow-xl py-3 rounded-3xl px-3">
      <div className="flex items-center gap-3">
        <div>
          <h1>Recent Visitation</h1>
        </div>
        <div>
          <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_6_pc4bpd.png" alt="" />
        </div>
      </div>
      <div className="pl-4 py-4 flex justify-start items-center -space-x-2 overflow-hidden">
        {contributors.map((user, index) => (
          <img 
            key={user.handle} 
            className="inline-block h-12 w-12 rounded-full ring-4 transition-transform transform hover:scale-110 ring-white" 
            src={user.avatarUrl}
            alt={user.handle}
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
        <span className="pl-5 font-lato text-md font-bold"> +4</span>
      </div>
    </div>
  );
}

