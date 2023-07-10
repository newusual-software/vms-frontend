import { useState, Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import StaffDashboardLayout from "../../layout/staffDashboardLayout";
import { CloseIcon } from "../../assets/index";
import { Calender, UserIcon, AlarmIcon, GroupIcon } from "../../assets/index";
import axios from "axios";

export default function StaffCheckInOrOut() {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenQ, setIsOpenQ] = useState(false);
  let [isOpenZ, setIsOpenZ] = useState(false);
  let [isOpenY, setIsOpenY] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const [userDetails, setUserDetails] = useState([]);
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, []);
  const fetchUserDetails = () => {
    const apiUrl = `https://vms-backend.up.railway.app/api/visitor/${id}`;
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        setUserDetail(data.visitor);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    if (userDetail) {
      setUserDetails([
        {
          icon: UserIcon,
          title: "ID",
          value: userDetail.id || "NU2041A/291",
          valueExtra: "",
        },
        {
          icon: UserIcon,
          title: "Full Name",
          value: userDetail.fullName || "",
          valueExtra: userDetail.valueExtra || "",
        },

        {
          icon: Calender,
          title: "Date",
          value: userDetail.date || "",
          valueExtra: "",
        },
        {
          icon: GroupIcon,
          title: "Reason for Visit (Optional)",
          value: userDetail.purposeOfVisit || "",
          valueExtra: "",
        },
        {
          icon: AlarmIcon,
          title: "Invite Status",
          value: "Scheduled",
          valueExtra: "",
        },
      ]);
    }
  }, [userDetail]);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };

  function closeModal() {
    setIsOpen(false) ||
      setIsOpenQ(false) ||
      setIsOpenY(false) ||
      setIsOpenZ(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleCheckout = () => {
    setIsOpenY(true);
  };
  const handleNo = () => {
    closeModal();
  };
  const handleYes = () => {
    navigate("/staffDashboard");
  };
  const handleSubmit = () => {
    setIsOpen(false);
    setIsOpenQ(true);
  };
  const handleClick = () => {
    openModal();
  };
  const handleQcheck = () => {
    setIsOpenZ(true);
  };
  return (
    <StaffDashboardLayout>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-3xl h-[25rem] transform overflow-y-hidden rounded-2xl flex flex-col justify-center  bg-white px-12 text-left align-middle shadow-xl transition-all">
                    <div
                      onClick={closeModal}
                      className="cursor-pointer absolute right-14 top-8"
                    >
                      <img src={CloseIcon} alt="" />
                    </div>
                    <div className="mt-2 flex flex-col justify-center items-center w-full ">
                      <div className="w-[60%]">
                        <h1 className="font-dmSans font-bold text-center text-2xl pt-14 ">
                          Check in Visitor
                        </h1>
                        <h3 className="font-dmSans text-[#BDBDBD] text-center text-md font-bold pb-6 pt-3">
                          You are requird to check in the vistor{" "}
                          {userDetail?.id || "NU2041A/291"} for the 30 min visit
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 w-full">
                        {userDetails.map((userDetail) => {
                          return (
                            <div
                              key={userDetail.title}
                              className="w-full gap-4 font-dmSans flex items-center"
                            >
                              <div className="flex justify-center items-center">
                                <div>
                                  <img src={userDetail?.icon} alt="" />
                                </div>

                                <div>
                                  <h3
                                    title={userDetail?.title}
                                    className="text-sm mx-5 flex flex-nowrap  py-2"
                                  >
                                    <i className="far fa-user"></i>{" "}
                                    {truncateText(userDetail?.title, 8)}
                                  </h3>
                                </div>
                              </div>

                              <div className=" text-left flex-nowrap ">
                                <h3 className=" py-2 ">
                                  {userDetail?.value}{" "}
                                  <span className="font-bold">
                                    {!undefined && `${userDetail?.valueExtra}`}
                                  </span>
                                </h3>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex gap-3 pb-5 justify-end items-center">
                      <div className="font-dmSans text-[#828282] font-normal ">
                        Current time
                      </div>
                      <div className="text-lg text-[#EB5757]">
                        {hour < 10 ? `0${hour}` : hour}:
                        {minute < 10 ? `0${minute}` : minute} WAT
                      </div>
                      <button
                        onClick={handleSubmit}
                        className="w-[6rem] text-white py-2 outline-none rounded-lg bg-[#4F4F4F]"
                      >
                        Check in
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      <>
        <Transition appear show={isOpenY} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-3xl h-[25rem] transform overflow-y-hidden rounded-2xl flex flex-col justify-center  bg-white px-12 text-left align-middle shadow-xl transition-all">
                    <div
                      onClick={closeModal}
                      className="cursor-pointer absolute right-14 top-8"
                    >
                      <img src={CloseIcon} alt="" />
                    </div>
                    <div className="mt-2 flex flex-col justify-center items-center w-full ">
                      <div className="w-[60%]">
                        <h1 className="font-dmSans font-bold text-center text-2xl pt-14 ">
                          Check Out Visitor
                        </h1>
                        <h3 className="font-dmSans text-[#BDBDBD] text-center text-md font-bold pb-6 pt-3">
                          You are requird to check in the vistor MD2041A/291 for
                          the 30 min visit
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 w-full">
                        {userDetails.map((userDetail) => {
                          return (
                            <div
                              key={userDetail.title}
                              className="w-full gap-4 font-dmSans flex items-center"
                            >
                              <div className="flex justify-center items-center">
                                <div>
                                  <img src={userDetail?.icon} alt="" />
                                </div>

                                <div>
                                  <h3
                                    title={userDetail?.title}
                                    className="text-sm mx-5 flex flex-nowrap  py-2"
                                  >
                                    <i className="far fa-user"></i>{" "}
                                    {truncateText(userDetail?.title, 8)}
                                  </h3>
                                </div>
                              </div>

                              <div className=" text-left flex-nowrap ">
                                <h3 className=" py-2 ">
                                  {userDetail?.value}{" "}
                                  <span className="font-bold">
                                    {!undefined && `${userDetail?.valueExtra}`}
                                  </span>
                                </h3>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex gap-3 pb-5 justify-end items-center">
                      <div className="font-dmSans text-[#828282] font-normal ">
                        Current time
                      </div>
                      <div className="text-lg text-[#EB5757]">
                        {hour < 10 ? `0${hour}` : hour}:
                        {minute < 10 ? `0${minute}` : minute} WAT
                      </div>
                      <button
                        onClick={handleQcheck}
                        className="w-[6rem] text-white py-2 outline-none rounded-lg bg-[#4F4F4F]"
                      >
                        Check Out
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      <Transition appear show={isOpenQ} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left flex flex-col justify-center items-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-[#333333] font-lato  font-bold leading-6"
                  >
                    Do you want to check in {userDetail?.fullName}?
                  </Dialog.Title>

                  <div className="mt-4 flex gap-5">
                    <button
                      type="button"
                      className="inline-flex underline justify-center rounded-md outline-none w-[3rem] py-2 text-sm font-medium text-[#4F4F4F] focus:outline-none "
                      onClick={handleNo}
                    >
                      No
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md outline-none bg-[#4F4F4F] w-[3.5rem] py-2 text-sm font-medium text-white focus:outline-none "
                      onClick={handleYes}
                    >
                      Yes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenZ} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left flex flex-col justify-center items-center align-middle shadow-xl transition-all">
                  <div
                    onClick={closeModal}
                    className="cursor-pointer absolute right-14 top-8"
                  >
                    <img src={CloseIcon} alt="" />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-[#333333] font-lato  font-bold leading-6"
                  >
                    Visitor {userDetail?.fullName}, checked Out!
                  </Dialog.Title>

                  <div className="mt-4 flex gap-5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md outline-none bg-[#4F4F4F] w-[4rem] py-2 text-sm font-medium text-white focus:outline-none "
                      onClick={handleYes}
                    >
                      okay
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="w-full pt-32 px-40 ">
        <div className="font-dmSans font-bold text-center text-2xl pt-14 ">
          Choose How You Would Like To Continue
        </div>
        <div className="font-dmSans text-[#BDBDBD] text-center text-lg font-bold pb-14 pt-3">
          Select any of the two options
        </div>
        <div className="flex gap-14 justify-center items-center flex-col md:flex-row w-full">
          <div
            className="w-1/2 flex justify-center items-center cursor-pointer"
            onClick={handleClick}
          >
            <div className="py-8 px-14 w-full md:h-[8rem] mx-auto bg-white rounded-xl shadow filter drop-shadow-lg space-y-6 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <img
                className="block w-10"
                src="https://res.cloudinary.com/phantom1245/image/upload/v1680970978/nem-insurance/coolion_tcag0k.png"
                alt=""
              />
              <div className="text-center space-y-2 sm:text-left">
                <div className="w-[7rem] font-lato font-bold text-lg">
                  Check In
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-1/2 flex justify-start cursor-pointer items-center"
            onClick={handleCheckout}
          >
            <div className="py-8 px-14 w-full md:h-[8rem]  bg-white rounded-xl shadow filter drop-shadow-lg space-y-6 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <img
                className="block w-10"
                src="https://res.cloudinary.com/phantom1245/image/upload/v1680971453/nem-insurance/coolicon_to1ogv.png"
                alt="Woman's Face"
              />
              <div className="text-center space-y-2 sm:text-left">
                <div className="w-[6rem] font-lato font-bold text-lg">
                  Check Out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StaffDashboardLayout>
  );
}