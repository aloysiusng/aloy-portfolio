"use client";
import { Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface CardProps {
  header?: string;
  summary?: string;
  content?: string;
  company?: string;
  context?: string;
  githubLink?: string;
}

export default function Card({ header = "", summary = "", content = "", company = "", context = "", githubLink = "" }: CardProps) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="flex flex-col h-48 xl:h-44 bg-zinc-900 border rounded-lg border-zinc-500 text-slate-400 cursor-pointer p-4 col-span-3 sm:col-span-2 md:col-span-1 xl:col-span-1" onClick={handleShowModal}>
        <h2 className="text-2xl font-bold font-mono text-slate-200">{header}</h2>
        <br />
        {summary}
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center pt-14">
          <div className="bg-zinc-900 border rounded-lg border-zinc-500 text-slate-400 p-4 w-full max-w-xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold font-mono text-slate-200">{header}</h2>
              <button type="button" onClick={handleCloseModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <span className="italic font-light">{summary}</span>
            <br />
            {company === "" ? (
              <Link href={githubLink} target="_blank">
                <Github size={30} className="mt-2 ring ring-white/50 rounded-full" />
              </Link>
            ) : (
              <div className="flex justify-between items-center mb-2">
                <p className="text-slate-300">
                  <b>Client:</b> &nbsp;
                  {company}
                </p>
                <Link href={githubLink} target="_blank">
                  <Github size={30} className="mr-1 ring ring-white/50 rounded-full" />
                </Link>
              </div>
            )}
            <br />
            <p className="text-justify text-pretty">
              <span className="font-bold text-slate-300">Context:</span> <br /> {context}
            </p>
            <br />
            <p className="text-justify text-pretty">
              <span className="font-bold text-slate-300">Features:</span> <br />
              <ReactMarkdown>{content}</ReactMarkdown>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
