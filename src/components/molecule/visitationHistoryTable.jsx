/* eslint-disable react/prop-types */
import React from "react";
import { FaUser, FaIdCard, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const VisitationHistoryTable = ({ visitors }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <table className="my-9 w-full">
      <thead className="py-3 text-left text-[#404040]">
        <tr>
          <th className=" py-2">
            <FaUser className="inline-block" /> Name
          </th>
          <th className=" py-2">
            <FaIdCard className="inline-block" /> ID
          </th>
          <th className=" py-2">
            <FaEnvelope className="inline-block" /> Email
          </th>
          <th className=" py-2">
            <FaCalendarAlt className="inline-block" /> Scheduled Date
          </th>
        </tr>
      </thead>
      <tbody>
        {visitors.map((row) => (
          <tr key={row.id} className="">
            <td className="py-2 text-[#404040]" title={row.fullName}>
              <FaUser className="far fa-user" />{" "}
              {truncateText(row.fullName, 20)}
            </td>
            <td className="py-2 text-[#C7C7C7]">{row.id}</td>
            <td className="py-2 text-[#C7C7C7]" title={row.email}>
              <FaUser className="far fa-user" /> {truncateText(row.email, 18)}
            </td>
            <td className="py-2 text-[#C7C7C7]">{row.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VisitationHistoryTable;
