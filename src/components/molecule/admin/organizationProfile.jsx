import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function OrganizationProfile({ data }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto ">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden ">
            <table className=" w-full ">
              <tbody className="bg-white text-[#434343] font-montserrat">
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                      {item.category === 'Password' || item.category === 'Master Security Pass' ? (
                        <div className="w-full flex justify-end items-center">
                          <div className=" relative left-40 flex justify-end  items-center">
                            {showPassword ? (
                              <FaEyeSlash
                                className="h-5 text-right w-5 text-gray-400 cursor-pointer"
                                onClick={handleTogglePassword}
                              />
                            ) : (
                              <FaEye
                                className="h-5 text-right w-5 text-gray-400 cursor-pointer"
                                onClick={handleTogglePassword}
                              />
                            )}
                          </div>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={item.information}
                            className="w-full text-right outline-none  py-2 text-sm border-gray-300 rounded-md"
                            readOnly
                          />
                          
                        </div>
                      ) : (
                        item.information
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

OrganizationProfile.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      information: PropTypes.string.isRequired
    })
  ).isRequired
};
