import React, { useState, useEffect } from "react";
import StaffProfile from "../../components/molecule/staff/staffProfile";
import StaffDashboardLayout from "../../layout/staffDashboardLayout";
import { Get } from "../../utils/request";

export default function StaffProfileDashboard() {
  const [dividedText, setDividedText] = useState("");
  const [staffName, setStaffName] = useState("");
  const [staffData, setStaffData] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedStaffId = localStorage.getItem("staffId");
    if (storedStaffId) {
      fetchStaffData(storedStaffId);
    }
  }, []);

  const fetchStaffData = (id) => {
    const url = `/staff/${id}`;
    Get(url, (response, error) => {
      if (error) {
        // Handle the error
        console.error("Error:", error.error);
      } else {
        console.log(response.staff);
        const dobString = staffData.dob;
        const dob = new Date(dobString);

        const year = dob.getFullYear(); // Extracts the year (e.g., 1990)
        const month = String(dob.getMonth() + 1).padStart(2, "0"); // Extracts the month and pads it with leading zeros if necessary (e.g., 01)
        const date = String(dob.getDate()).padStart(2, "0"); // Extracts the date and pads it with leading zeros if necessary (e.g., 01)

        const formattedDob = `${year}-${month}-${date}`;
        // Handle the successful response
        setStaffName(response.staff.fullName);
        setDividedText(response.staff.phone.match(/.{1,3}/g).join("-"));
        setData([
          {
            category: "Email",
            information: response.staff.email,
            editable: false,
          },
          {
            category: "Phone",
            information: response.staff.phone,
            editable: false,
          },
          {
            category: "Address",
            information: response.staff.address,
            editable: false,
          },
          {
            category: "Employer ID",
            information: response.staff.employerId,
            editable: false,
          },
          {
            category: "Department",
            information: response.staff.department,
            editable: false,
          },
          {
            category: "Password",
            information: response.staff.employerId,
            editable: false,
          },
          { category: "DOB", information: formattedDob, editable: false },
          {
            category: "Gender",
            information: response.staff.gender,
            editable: false,
          },
        ]);
      }
    });
  };

  const handleEditField = (index) => {
    const updatedData = [...data];
    updatedData[index].editable = true;
    setData(updatedData);
  };

  const handleSaveField = (index) => {
    const updatedData = [...data];
    updatedData[index].editable = false;
    setData(updatedData);
    // Perform save logic here, such as making an API request to update the staff profile
  };

  const handleFieldChange = (e, index) => {
    const updatedData = [...data];
    updatedData[index].information = e.target.value;
    setData(updatedData);
  };

  return (
    <StaffDashboardLayout>
      <div className="w-full pt-32 px-14 ">
        <div className="w-[60%] mx-auto">
          <div className="flex flex-row pt-8 justify-start gap-5 items-start">
            <div>
              <img
                className="w-full"
                src="https://res.cloudinary.com/phantom1245/image/upload/v1680876914/nem-insurance/Ellipse_20_thzbpg.png"
                alt=""
              />
            </div>
            <div className="block font-montserrat text-[#434343] pt-6">
              <div className="font-bold text-3xl ">{staffName}</div>
              <h3>{dividedText}</h3>
            </div>
          </div>
          <div>
            <StaffProfile
              data={data}
              handleEditField={handleEditField}
              handleSaveField={handleSaveField}
              handleFieldChange={handleFieldChange}
            />
          </div>
        </div>
      </div>
    </StaffDashboardLayout>
  );
}
