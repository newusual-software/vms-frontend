import { useState } from 'react';
import { HiEye, HiEyeOff, HiX, HiPencil } from 'react-icons/hi';
import classNames from 'classnames';

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
export default function StaffList() {
  const [isHidden, setIsHidden] = useState(true);
  const [isEditing, setIsEditing] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleHide = (id) => {
    setIsHidden(!isHidden);
    setSelectedDepartment(id);
  };

  const handleClose = () => {
    setIsHidden(true);
    setSelectedDepartment(null);
  };

  const handleEdit = (id) => {
    setIsEditing(id);
  };

  const handleCancel = () => {
    setIsEditing(null);
  };

  const handleSave = () => {
    setIsEditing(null);
  };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };

  return (
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
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody >
          {visitors.map((visitor) => (
            <tr key={visitor.id} className={classNames({ 'bg-gray-200 mt-10 font-dmSans': isHidden && selectedDepartment === visitor.id })}>
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
              <td className="px-4 py-2 flex justify-end items-center">
                {isHidden && selectedDepartment === visitor.id ? (
                  <HiEyeOff className="text-gray-400 cursor-pointer hover:text-gray-600" onClick={() => handleHide(visitor.id)} />
                ) : (
                  <HiEye className="text-gray-400 cursor-pointer hover:text-gray-600" onClick={() => handleHide(visitor.id)} />
                )}
                <HiX className="text-gray-400 cursor-pointer hover:text-gray-600 ml-2" onClick={handleClose} />
                {isEditing === visitor.id ? (
                  <>
                    <HiPencil className="text-gray-400 cursor-pointer hover:text-gray-600 ml-2" onClick={handleSave} />
                    <HiX className="text-gray-400 cursor-pointer hover:text-gray-600 ml-2" onClick={handleCancel} />
                  </>
                ) : (
                  <HiPencil className="text-gray-400 cursor-pointer hover:text-gray-600 ml-2" onClick={() => handleEdit(visitor.id)} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
