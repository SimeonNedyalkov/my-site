import programingBasics from "../assets/certificates/Programming Basics - January 2023 - Certificate.pdf";
import programmingFundamentals from "../assets/certificates/Programming Fundamentals with JavaScript - May 2023 - Certificate.pdf";
import jsAdvanced from "../assets/certificates/JS Advanced - September 2023 - Certificate.pdf";
import jsApplications from "../assets/certificates/JS Applications - October 2023 - Certificate.pdf";
import htmlCSS from "../assets/certificates/HTML & CSS - January 2024 - Certificate.pdf";
import angular from "../assets/certificates/Angular - February 2024 - Certificate.pdf";
import typescript from "../assets/certificates/TypeScript - April 2024 - Certificate.pdf";
import jsBackend from "../assets/certificates/JS Back-End - May 2024 - Certificate.pdf";
import reactJS from "../assets/certificates/ReactJS - June 2024 - Certificate.pdf";
import JSWEBDEV from "../assets/certificates/Diploma for JS Web Developer.pdf";
import hundreddaysofCode from "../assets/certificates/UC-978fe1b1-230d-4415-8549-a0b4ddb5c392.pdf";
import { useState } from "react";

const arrayWithCerts = [
  {
    name: "Programming Basics",
    link: "https://softuni.bg/certificates/details/158820/c99d8fae",
    file: programingBasics,
  },
  {
    name: "Programming Fundamentals",
    link: "https://softuni.bg/certificates/details/180268/ae4252ad",
    file: programmingFundamentals,
  },
  {
    name: "JS Advanced",
    link: "https://softuni.bg/Certificates/Details/188123/170d0979",
    file: jsAdvanced,
  },
  {
    name: "JS Applications",
    link: "https://softuni.bg/certificates/details/195328/be386887",
    file: jsApplications,
  },
  {
    name: "HTML and CSS",
    link: "https://softuni.bg/certificates/details/205003/be2eb721",
    file: htmlCSS,
  },
  {
    name: "Angular",
    link: "https://softuni.bg/certificates/details/211715/9b3780da",
    file: angular,
  },
  {
    name: "TypeScript",
    link: "https://softuni.bg/certificates/details/215567/8decd9d9",
    file: typescript,
  },
  {
    name: "JS Backend",
    link: "https://softuni.bg/certificates/details/218293/5ac6b938",
    file: jsBackend,
  },
  {
    name: "React JS",
    link: "https://softuni.bg/certificates/details/223093/e1650db6",
    file: reactJS,
  },
  {
    name: "JavaScript Web Developer",
    link: "https://softuni.bg/certificates/details/225822/e1efcc4e",
    file: JSWEBDEV,
  },
  {
    name: "100 Days Of Code",
    link: "https://www.udemy.com/certificate/UC-978fe1b1-230d-4415-8549-a0b4ddb5c392/",
    file: hundreddaysofCode,
  },
];

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? arrayWithCerts : arrayWithCerts.slice(0, 6);
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-16 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12 pb-5">
        📜 Certificates
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleCerts.map((cert, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col p-5"
          >
            <h2 className="text-lg font-semibold text-gray-300 mb-4">
              {cert.name}
            </h2>
            <iframe
              src={cert.file}
              width="100%"
              height="100%"
              title={cert.name}
              className="w-full border border-gray-300 rounded-lg mb-4"
            ></iframe>
            <div className="flex justify-between gap-2">
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <span>View PDF</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link w-4 h-4"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                <span>Official Link </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {arrayWithCerts.length > 6 && (
        <div className="flex  mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-3 py-1.5
    text-slate-300 
    hover:text-white 
    text-sm 
    font-medium 
    transition-all 
    duration-300 
    ease-in-out
    flex 
    items-center 
    gap-2
    bg-white/5 
    hover:bg-white/10
    rounded-md
    border 
    border-white/10
    hover:border-white/20
    backdrop-blur-sm
    group
    relative
    overflow-hidden"
          >
            {showAll ? "See Less" : "See More"}
            {!showAll ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="
              transition-transform 
              duration-300 
              group-hover:-translate-y-0.5
            "
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
