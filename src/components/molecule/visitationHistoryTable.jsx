import { FaUser, FaIdCard, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";

const VisitationHistoryTable = () => {
  const [allVisitor, setAllVisitor] = useState([]);

  useEffect(() => {
    fetchAllVisitor();
  }, []);

  const fetchAllVisitor = () => {
    const apiUrl = `https://vms-backend.up.railway.app/api/allvisitor`;
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        setAllVisitor(data.visitors);
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
        {allVisitor.map((row) => (
          <tr key={row.id} className="">
            <td className="py-2 text-[#404040]" title={row.fullName}>
              <i className="far fa-user"></i> {truncateText(row.fullName, 20)}
            </td>
            <td className="py-2 text-[#C7C7C7]">{row.id}</td>
            <td className="py-2 text-[#C7C7C7]" title={row.email}>
              <i className="far fa-user"></i> {truncateText(row.email, 18)}
            </td>
            <td className="py-2 text-[#C7C7C7]">{row.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VisitationHistoryTable;
