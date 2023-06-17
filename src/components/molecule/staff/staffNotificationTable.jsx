import React from 'react';

export default function StaffNotificationTable() {
  const data = [
    { id: 1, name: "John Doe", time: "14:23", duration: "3hrs" },
    { id: 2, name: "John Doe", time: "14:23", duration: "3hrs" },
    { id: 3, name: "John Doe", time: "14:23", duration: "3hrs" }

  ];
  return (
    <div className="w-full py-4">
      <table  className="w-full">
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className=" flex justify-between items-center">
              <td className="py-1 text-[#404040]">{row.name}</td>
              <td className="py-1 text-[#C7C7C7]">{row.time}</td>
              <td className="w-[4rem] gap-3 text-white py-2 my-1 bg-[#4F4F4F] flex justify-center items-center rounded-md">{row.duration}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
