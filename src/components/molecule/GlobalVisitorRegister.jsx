/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Input from "../atoms/input";
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
} from "../../assets/index";

export const GlobalRegister = ({
  isOpen,
  closeModal,
  handleSend,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setDate("");
    setTime("");
    setPurpose("");
    setPhoneNumber("");
    setStep(1);
  };

  const validateForm = () => {
    let isValid = true;
    if (
      email === "" ||
      fullName === "" ||
      date === "" ||
      time === "" ||
      purpose === "" ||
      phoneNumber === ""
    ) {
      isValid = false;
      alert("Invalid credentials");
      return setStep(1);
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSend(email, fullName, date, time, purpose, phoneNumber);
      resetForm();
    } else {
      return setStep(1);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
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
              <Dialog.Panel className="w-full max-w-3xl h-[38rem] transform overflow-hidden rounded-2xl flex flex-col justify-center  bg-white px-12 text-left align-middle shadow-xl transition-all">
                <div
                  onClick={closeModal}
                  className="cursor-pointer absolute right-14 top-8"
                >
                  <img src={CloseIcon} alt="" />
                </div>
                <h1 className="block text-xl font-medium text-center text-gray-700">
                  Create A New Visitor
                </h1>
                <form
                  action=""
                  method="post"
                  className="flex justify-center flex-col items-center"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (step === 1) {
                      setStep(2);
                    } else if (step === 2) {
                      setStep(3);
                    }
                  }}
                >
                  {step === 1 ? (
                    <div>
                      <div className="pt-6 flex justify-center items-center">
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

                      <div className="flex justify-center items-center">
                        <button className="bg-[#4F4F4F] w-[20rem] py-3 text-white rounded-lg">
                          Next
                        </button>
                      </div>
                    </div>
                  ) : step === 2 ? (
                    <div>
                      <div className="pt-6 flex justify-center items-center">
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

                      <div className="flex justify-center items-center">
                        <button
                          onClick={handleSubmit}
                          className="bg-[#4F4F4F] w-[20rem] py-3 text-white rounded-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  ) : (
                    setStep(1)
                  )}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
