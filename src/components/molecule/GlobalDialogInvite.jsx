/* eslint-disable react/prop-types */
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CloseIcon } from "../../assets/index";

export const GlobalDialog = ({ isOpen, closeModal, handleSend }) => {
  const [email, setEmail] = useState("");
  const [duration, setDuration] = useState(""); // New state for duration input

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(email, duration); // Pass duration as an argument to handleSend function
    setEmail("");
    setDuration("")
  };

  return (
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
                <h1 className="block text-xl font-medium text-center text-gray-700">
                  Invite Visitor by Email
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleChange}
                      className="mt-1 px-3 py-2 block w-full border-gray-900 focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="duration"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Duration
                    </label>
                    <input
                      type="text"
                      id="duration"
                      value={duration}
                      onChange={handleDurationChange}
                      className="mt-1 px-3 py-2 block w-full border-gray-900 focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm"
                      placeholder="Enter the duration"
                      required
                    />
                  </div>
                  <div className="mt-10 flex justify-center items-center">
                    <button
                      type="submit"
                      className="bg-[#4F4F4F] font-bold w-[20rem] py-3 text-white rounded-lg outline-none border-none font-dmSans"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
