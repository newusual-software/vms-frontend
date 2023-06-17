import React, { useState, Fragment } from "react";
import {
  IncompleteProgressBar,
  CompleteProgressBar,
  Calender,
  UserIcon,
  ContactIcon,
  PhoneIcon,
  TimeIcon,
  QueryIcon,
  CloseIcon,
  SmileyIcon,
} from "../../assets";
import Input from "../../components/atoms/input";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layout/authLayout";
import {Post} from "../../utils/request";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [step, setStep] = useState(1);
  let [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [rest, setRest] = useState(null);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const validateForm = () => {
    let isValid = true;
    if (
      email == "" ||
      fullName == "" ||
      date == "" ||
      time == "" ||
      purpose == "" ||
      phoneNumber == null
    ) {
      isValid = false;
      alert("invalid credential");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      fullName,
      email,
      phoneNumber,
      date,
      time,
      purposeOfVisit: purpose,
    };
    if (validateForm()) {
      Post("/signup", data, (response, error) => {
        if (response) {
          // Handle successful response
          console.log("Response:", response.visitor._id);
          localStorage.setItem("userId", response.visitor._id);
          openModal();
          setFullName("");
          setEmail("");
          setPhoneNumber("");
          setDate("");
          setTime("");
          setPurpose("");
        } else {
          // Handle error
          console.error("Error:", error.error);
          if (error.error == "Visitor with this email already exists") {
            alert("email already exist")
          }
          else if (error.error == "Duplicate field value entered"){
            alert("phone number already exist");
          }
        }
      });

    }
    else{
      return false
    }
  };

  const handlePrint = () => {
    navigate("/printForm");
  };
  return (
    <div>
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
                  <Dialog.Panel className="w-full max-w-2xl h-[20rem] transform overflow-hidden rounded-2xl flex flex-col justify-center  bg-white px-12 text-left align-middle shadow-xl transition-all">
                    <div
                      onClick={closeModal}
                      className="cursor-pointer absolute right-14 top-8"
                    >
                      <img src={CloseIcon} alt="" />
                    </div>
                    <div className="mt-2 flex justify-center items-center w-full ">
                      <div className="w-[60%]">
                        <p className="font-dmSans font-medium text-[#BDBDBD] leading-[1.5rem] gap-4 text-lg">
                          You visit will be scheduled pending approval.
                          <br />
                          Upon confrimation an email will be sent for you to
                          finalize
                        </p>
                      </div>
                      <div className="pl-10">
                        <img src={SmileyIcon} alt="" />
                      </div>
                    </div>

                    <div className="mt-10 flex justify-center items-center ">
                      <button
                        type="button"
                        className="bg-[#4F4F4F] font-bold w-[20rem] py-3 text-white rounded-lg outline-none border-none font-dmSans"
                        onClick={handlePrint}
                      >
                        Print Invite
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>

      <AuthLayout
        heading={
          !rest && (
            <React.Fragment>
              Fill the <span className="text-[#4F4F4F]">FORM</span> below
            </React.Fragment>
          )
        }
      >
        <form
          action=""
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            if (step == 1) {
              setStep(2);
            }
            if (step == 2) {
              setStep(3);
            }
          }}
        >
          {step == 1 ? (
            <div>
              <div className="pt-14 flex justify-center items-center">
                <img src={IncompleteProgressBar} alt="" />
              </div>
              <div className="w-full">
                <Input
                  label={"full name"}
                  icon={UserIcon}
                  type={"text"}
                  placeholder={"Full Name"}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="w-full">
                <Input
                  label={"email address"}
                  icon={ContactIcon}
                  type={"email"}
                  placeholder={"Email Address"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full">
                <Input
                  label={"phone number"}
                  icon={PhoneIcon}
                  type={"tel"}
                  placeholder={"Phone Number"}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="flex justify-center items-center ">
                <button className="bg-[#4F4F4F] w-[20rem] py-3 text-white rounded-lg ">
                  Next
                </button>
              </div>
            </div>
          ) : step == 2 ? (
            <div>
              <div className="pt-14 flex justify-center items-center">
                <img src={CompleteProgressBar} alt="" />
              </div>
              <div className="w-full">
                <Input
                  label={"Date"}
                  icon={Calender}
                  type={"date"}
                  placeholder={"Date"}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="w-full">
                <Input
                  label={"Time"}
                  icon={TimeIcon}
                  type={"time"}
                  placeholder={"Time"}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="w-full">
                <Input
                  label={"Purpose of visit"}
                  icon={QueryIcon}
                  type={"text"}
                  placeholder={"Purpose of visit"}
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                />
              </div>

              <div className="flex justify-center items-center ">
                <button
                  onClick={handleSubmit}
                  className="bg-[#4F4F4F] w-[20rem] py-3 text-white rounded-lg "
                >
                  submit
                </button>
              </div>
            </div>
          ) : (
            setStep(1)
          )}
        </form>
      </AuthLayout>
    </div>
  );
}
