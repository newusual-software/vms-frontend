import React from "react";
import { FaUser, FaIdCard, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const VisitationHistoryTable = () => {
  const data = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", dueDate: "2023-05-01" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", dueDate: "2023-04-15" },
    { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com", dueDate: "2023-04-22" }
  ];
  return (
    <table className="my-9 w-full">
      <thead className="py-3 text-left text-[#404040]">
        <tr>
          <th className=" py-2"><FaUser className="inline-block" /> Name</th>
          <th className=" py-2"><FaIdCard className="inline-block" /> ID</th>
          <th className=" py-2"><FaEnvelope className="inline-block" /> Email</th>
          <th className=" py-2"><FaCalendarAlt className="inline-block" /> Due Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="">
            <td className="py-2 text-[#404040]">{row.name}</td>
            <td className="py-2 text-[#C7C7C7]">{row.id}</td>
            <td className="py-2 text-[#C7C7C7]">{row.email}</td>
            <td className="py-2 text-[#C7C7C7]">{row.dueDate}</td>
            <td className="py-2 text-[#C7C7C7]">
              <img src="https://res.cloudinary.com/phantom1245/image/upload/v1680417731/nem-insurance/coolicon_5_exq9dm.png" alt="" />
            </td>

          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default VisitationHistoryTable;
