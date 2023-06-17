import { useState } from 'react';
import { HiEye, HiEyeOff, HiX, HiPencil } from 'react-icons/hi';
import classNames from 'classnames';

const departments = [
  { id: 1, name: 'Marketing' },
  { id: 2, name: 'Sales' },
  { id: 3, name: 'Engineering' },
  { id: 4, name: 'HR' },
];

export default function DepartmentList() {
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

  return (
    <table className="w-full border-collapse my-6">
      <thead>
        <tr className="text-left">
          <th className="px-4 py-2">
            <img className='inline-block pr-2 w-5' src="https://res.cloudinary.com/phantom1245/image/upload/v1680417730/nem-insurance/fullName_r9yzzj.png" alt="" />
                  S/N</th>
          <th className="px-4 py-2">
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680872978/nem-insurance/coolicon1_gt5erz.png" className='inline-block pr-2 w-6' alt="" />
                  Department</th>
          <th className="px-4 py-2"></th>
        </tr>
      </thead>
      <tbody>
        {departments.map((dept) => (
          <tr key={dept.id} className={classNames({ 'bg-gray-200': isHidden && selectedDepartment === dept.id })}>
            <td className="px-4 py-2">{dept.id}</td>
            <td className="px-4 py-2">{isEditing === dept.id ? <input type="text" defaultValue={dept.name} /> : dept.name}</td>
            <td className="px-4 py-2 flex justify-end items-center">
              {isHidden && selectedDepartment === dept.id ? (
                <HiEyeOff className="text-gray-400 cursor-pointer hover:text-gray-600" onClick={() => handleHide(dept.id)} />
              ) : (
                <HiEye className="text-gray-400 cursor-pointer hover:text-gray-600" onClick={() => handleHide(dept.id)} />
              )}
              <HiX className="text-gray-400 cursor-pointer hover:text-gray-600 ml-2" onClick={handleClose} />
              {isEditing === dept.id ? (
                <>
                  <HiPencil className="text-gray-400 cursor-pointer hover:text-gray-600 ml-2" onClick={handleSave} />
                  <HiX className="text-gray-400 cursor-pointer hover:text-gray-600 ml-2" onClick={handleCancel} />
                </>
              ) : (
                <HiPencil className="text-gray-400 cursor-pointer hover:text-gray-600 ml-2" onClick={() => handleEdit(dept.id)} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
