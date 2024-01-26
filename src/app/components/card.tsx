"use client";
import { useState } from "react";

interface CardProps {
  header?: string;
  content?: string;
}

export default function Card({ header = "", content = "" }: CardProps) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="bg-zinc-900 border rounded-lg border-zinc-500 text-slate-400 cursor-pointer p-4 col-span-3 sm:col-span-2 md:col-span-1 xl:col-span-1" onClick={handleShowModal}>
        {header}
        <br />
        {content}
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-zinc-900 border rounded-lg border-zinc-500 text-slate-400 p-4 ">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">{header}</h3>
              <button type="button" onClick={handleCloseModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <p>{content}</p>
          </div>
        </div>

        // <div id="modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        //   <div className="relative p-4 w-full max-w-2xl max-h-full">
        //     <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        //       <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        //         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{header}</h3>
        //       </div>

        //       <div className="p-4 md:p-5 space-y-4">
        //         <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{content}</p>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      )}
    </>
  );
}
