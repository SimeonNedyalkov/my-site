import TS from "../assets/skills/typescript-icon-svgrepo-com.svg";
import JS from "../assets/skills/javascript-logo-svgrepo-com.svg";
import PY from "../assets/skills/python-svgrepo-com.svg";
import Ang from "../assets/skills/angular-svgrepo-com.svg";
import React from "../assets/skills/react-javascript-js-framework-facebook-svgrepo-com.svg";
import NodeJS from "../assets/skills/node-js-svgrepo-com.svg";
import Flask from "../assets/skills/flask-svgrepo-com.svg";
import NextJS from "../assets/skills/nextjs-svgrepo-com.svg";
import Git from "../assets/skills/git-svgrepo-com.svg";
import Figma from "../assets/skills/figma-svgrepo-com.svg";
import Mocha from "../assets/skills/mocha-svgrepo-com.svg";
import Postman from "../assets/skills/postman-icon-svgrepo-com.svg";
import HTML from "../assets/skills/html-5-svgrepo-com.svg";
import CSS from "../assets/skills/css-3-svgrepo-com.svg";
import MongoDB from "../assets/skills/mongo-svgrepo-com.svg";
import MySQL from "../assets/skills/mysql-logo-svgrepo-com.svg";
import SQLLite from "../assets/skills/sqllite-svgrepo-com.svg";
import Jest from "../assets/skills/jest-snapshot-svgrepo-com.svg";
export default function Skills() {
  const skills = [
    {
      languages: [
        { language: "JavaScript", svg: JS, years: "3+" },
        { language: "TypeScript", svg: TS, years: "1+" },
        { language: "Python", svg: PY, years: "3+" },
        { language: "HTML5", svg: HTML, years: "3+" },
        { language: "CSS3", svg: CSS, years: "3+" },
      ],
      frameworks: [
        { framework: "Angular", svg: Ang, years: "1+" },
        { framework: "React", svg: React, years: "1+" },
        { framework: "NodeJS", svg: NodeJS, years: "1+" },
        { framework: "NextJS", svg: NextJS, years: "1-" },
        { framework: "Flask", svg: Flask, years: "3+" },
      ],
      tools: [
        { tool: "Git", svg: Git, years: "3+" },
        { tool: "Figma", svg: Figma, years: "1+" },
        { tool: "Mocha", svg: Mocha, years: "1+" },
        { tool: "Jest", svg: Jest, years: "1-" },
        { tool: "Postman", svg: Postman, years: "2+" },
      ],
      databases: [
        { database: "MongoDB", svg: MongoDB, years: "1+" },
        { database: "MySQL", svg: MySQL, years: "1+" },
        { database: "SQLite", svg: SQLLite, years: "3+" },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row">
        <div className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
          <div className="px-6 text-lg lg:text-2xl">Languages</div>
          {skills.map((i) =>
            i.languages.map((l) => (
              <div
                key={l.language}
                className="py-6 flex items-center justify-between border-b border-stone-50/30"
              >
                <div className="flex items-center">
                  <img src={`${l.svg}`} alt="Icon" width="50" height="50" />

                  <h3 className="px-6 text-lg lg:text-2xl">{l.language}</h3>
                </div>
                <div className="text-md font-semibod lg:text-xl">
                  <span>{l.years}</span>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
          <div className="px-6 text-lg lg:text-2xl">Frameworks</div>
          {skills.map((i) =>
            i.frameworks.map((l) => (
              <div
                key={l.framework}
                className="py-6 flex items-center justify-between border-b border-stone-50/30"
              >
                <div className="flex items-center">
                  <img src={`${l.svg}`} alt="Icon" width="50" height="50" />

                  <h3 className="px-6 text-lg lg:text-2xl">{l.framework}</h3>
                </div>
                <div className="text-md font-semibod lg:text-xl">
                  <span>{l.years}</span>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
          <div className="px-6 text-lg lg:text-2xl">Tools</div>
          {skills.map((i) =>
            i.tools.map((l) => (
              <div
                key={l.tool}
                className="py-6 flex items-center justify-between border-b border-stone-50/30"
              >
                <div className="flex items-center">
                  <img src={`${l.svg}`} alt="Icon" width="50" height="50" />

                  <h3 className="px-6 text-lg lg:text-2xl">{l.tool}</h3>
                </div>
                <div className="text-md font-semibod lg:text-xl">
                  <span>{l.years}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
        <div className="px-6 text-lg lg:text-2xl">DataBases</div>
        {skills.map((i) =>
          i.databases.map((l) => (
            <div
              key={l.database}
              className="py-6 flex items-center justify-between border-b border-stone-50/30"
            >
              <div className="flex items-center">
                <img src={`${l.svg}`} alt="Icon" width="50" height="50" />

                <h3 className="px-6 text-lg lg:text-2xl">{l.database}</h3>
              </div>
              <div className="text-md font-semibod lg:text-xl">
                <span>{l.years}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    // <div className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
    //   <div className="py-6 flex items-center justify-between border-b border-stone-50/30">
    //     <div className="flex items-center">
    //       <svg
    //         stroke="currentColor"
    //         fill="currentColor"
    //         strokeWidth="0"
    //         role="img"
    //         viewBox="0 0 24 24"
    //         className="text-4xl text-green-600 lg:text-5xl"
    //         height="1em"
    //         width="1em"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
    //       </svg>
    //       <h3 className="px-6 text-lg lg:text-2xl">Javascript</h3>
    //     </div>
    //     <div className="text-md font-semibod lg:text-xl">
    //       <span>3 years</span>
    //     </div>
    //   </div>
    //   <div className="py-6 flex items-center justify-between border-b border-stone-50/30">
    //     <div className="flex items-center">
    //       <img src={`${TS}`} alt="Icon" width="50" height="50" />

    //       <h3 className="px-6 text-lg lg:text-2xl">TypeScript</h3>
    //     </div>
    //     <div className="text-md font-semibod lg:text-xl">
    //       <span>1+ years</span>
    //     </div>
    //   </div>
    //   <div className="py-6 flex items-center justify-between border-b border-stone-50/30">
    //     <div className="flex items-center">
    //       <svg
    //         stroke="currentColor"
    //         fill="currentColor"
    //         strokeWidth="0"
    //         viewBox="0 0 24 24"
    //         className="text-4xl text-cyan-400 lg:text-5xl"
    //         height="1em"
    //         width="1em"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M12.001 13.5001C11.1725 13.5001 10.501 12.8285 10.501 12.0001C10.501 11.1716 11.1725 10.5001 12.001 10.5001C12.8294 10.5001 13.501 11.1716 13.501 12.0001C13.501 12.8285 12.8294 13.5001 12.001 13.5001ZM11.4733 16.4945C11.6479 16.705 11.8239 16.908 12.001 17.103C12.178 16.908 12.3541 16.705 12.5286 16.4945C12.3538 16.4982 12.1779 16.5001 12.001 16.5001C11.824 16.5001 11.6481 16.4982 11.4733 16.4945ZM9.47837 16.3694C8.6762 16.2846 7.91035 16.1603 7.19268 16.0016C7.11832 16.3512 7.06134 16.6904 7.02243 17.0166C6.83358 18.6 7.09805 19.5617 7.50098 19.7943C7.9039 20.0269 8.86893 19.7751 10.1458 18.8199C10.4088 18.6231 10.6741 18.4042 10.9397 18.1649C10.4434 17.6228 9.95287 17.0217 9.47837 16.3694ZM16.8093 16.0016C16.0916 16.1603 15.3257 16.2846 14.5236 16.3694C14.0491 17.0217 13.5585 17.6228 13.0622 18.1649C13.3279 18.4042 13.5931 18.6231 13.8562 18.8199C15.133 19.7751 16.0981 20.0269 16.501 19.7943C16.9039 19.5617 17.1684 18.6 16.9795 17.0166C16.9406 16.6904 16.8836 16.3512 16.8093 16.0016ZM18.2598 15.6136C18.8364 18.2526 18.5328 20.3533 17.251 21.0933C15.9691 21.8334 13.9981 21.046 12.001 19.2271C10.0038 21.046 8.03282 21.8334 6.75098 21.0933C5.46913 20.3533 5.16555 18.2526 5.74217 15.6136C3.16842 14.7935 1.50098 13.4802 1.50098 12.0001C1.50098 10.5199 3.16842 9.20668 5.74217 8.38654C5.16555 5.74754 5.46913 3.64687 6.75098 2.9068C8.03282 2.16673 10.0038 2.95415 12.001 4.77302C13.9981 2.95415 15.9691 2.16673 17.251 2.9068C18.5328 3.64687 18.8364 5.74754 18.2598 8.38654C20.8335 9.20668 22.501 10.5199 22.501 12.0001C22.501 13.4802 20.8335 14.7935 18.2598 15.6136ZM10.9397 5.83521C10.6741 5.59597 10.4088 5.37703 10.1458 5.18024C8.86893 4.22499 7.9039 3.97321 7.50098 4.20584C7.09805 4.43847 6.83358 5.4001 7.02243 6.9835C7.06134 7.30969 7.11832 7.6489 7.19268 7.99857C7.91035 7.83985 8.6762 7.71556 9.47837 7.63078C9.95287 6.97848 10.4434 6.37737 10.9397 5.83521ZM14.5236 7.63078C15.3257 7.71556 16.0916 7.83985 16.8093 7.99857C16.8836 7.6489 16.9406 7.30969 16.9795 6.9835C17.1684 5.4001 16.9039 4.43847 16.501 4.20584C16.0981 3.97321 15.133 4.22499 13.8562 5.18024C13.5931 5.37703 13.3279 5.59597 13.0622 5.83521C13.5585 6.37737 14.0491 6.97848 14.5236 7.63078ZM12.5286 7.50565C12.3541 7.29515 12.178 7.09211 12.001 6.89711C11.8239 7.09211 11.6479 7.29515 11.4733 7.50565C11.6481 7.50194 11.824 7.50007 12.001 7.50007C12.1779 7.50007 12.3538 7.50194 12.5286 7.50565ZM8.37252 14.7042C8.28191 14.5547 8.19233 14.4033 8.10386 14.2501C8.01539 14.0968 7.92906 13.9435 7.84488 13.7903C7.74985 14.0467 7.66205 14.3007 7.58169 14.5515C7.83908 14.6074 8.10295 14.6583 8.37252 14.7042ZM10.3049 14.9377C10.8579 14.9788 11.4251 15.0001 12.001 15.0001C12.5769 15.0001 13.144 14.9788 13.697 14.9377C14.0091 14.4793 14.3111 13.9988 14.5991 13.5001C14.887 13.0013 15.1522 12.4995 15.393 12.0001C15.1522 11.5006 14.887 10.9988 14.5991 10.5001C14.3111 10.0013 14.0091 9.52081 13.697 9.06246C13.144 9.02133 12.5769 9.00007 12.001 9.00007C11.4251 9.00007 10.8579 9.02133 10.3049 9.06246C9.99283 9.52081 9.69086 10.0013 9.4029 10.5001C9.11494 10.9988 8.8498 11.5006 8.60892 12.0001C8.8498 12.4995 9.11494 13.0013 9.4029 13.5001C9.69086 13.9988 9.99283 14.4793 10.3049 14.9377ZM16.1571 10.2098C16.2521 9.9534 16.3399 9.6994 16.4203 9.44859C16.1629 9.39278 15.899 9.34182 15.6294 9.29591C15.72 9.44543 15.8096 9.59683 15.8981 9.75007C15.9866 9.9033 16.0729 10.0566 16.1571 10.2098ZM6.13143 9.83671C5.79142 9.94714 5.46917 10.0674 5.16723 10.1968C3.70154 10.825 3.00098 11.5348 3.00098 12.0001C3.00098 12.4653 3.70154 13.1752 5.16723 13.8033C5.46917 13.9327 5.79142 14.053 6.13143 14.1634C6.35281 13.4625 6.6281 12.7371 6.95576 12.0001C6.6281 11.263 6.35281 10.5376 6.13143 9.83671ZM7.58169 9.44859C7.66205 9.6994 7.74985 9.9534 7.84488 10.2098C7.92906 10.0566 8.01539 9.9033 8.10386 9.75007C8.19233 9.59683 8.28191 9.44543 8.37252 9.29591C8.10295 9.34182 7.83908 9.39278 7.58169 9.44859ZM17.8705 14.1634C18.2105 14.053 18.5328 13.9327 18.8347 13.8033C20.3004 13.1752 21.001 12.4653 21.001 12.0001C21.001 11.5348 20.3004 10.825 18.8347 10.1968C18.5328 10.0674 18.2105 9.94714 17.8705 9.83671C17.6491 10.5376 17.3739 11.263 17.0462 12.0001C17.3739 12.7371 17.6491 13.4625 17.8705 14.1634ZM16.4203 14.5515C16.3399 14.3007 16.2521 14.0467 16.1571 13.7903C16.0729 13.9435 15.9866 14.0968 15.8981 14.2501C15.8096 14.4033 15.72 14.5547 15.6294 14.7042C15.899 14.6583 16.1629 14.6074 16.4203 14.5515Z"></path>
    //       </svg>
    //       <h3 className="px-6 text-lg lg:text-2xl">React</h3>
    //     </div>
    //     <div className="text-md font-semibod lg:text-xl">
    //       <span>1+ years</span>
    //     </div>
    //   </div>
    //   <div className="py-6 flex items-center justify-between border-b border-stone-50/30">
    //     <div className="flex items-center">
    //       <img src={`${Ang}`} alt="Icon" width="50" height="50" />

    //       <h3 className="px-6 text-lg lg:text-2xl">Angular</h3>
    //     </div>
    //     <div className="text-md font-semibod lg:text-xl">
    //       <span>1+ years</span>
    //     </div>
    //   </div>
    //   <div className="py-6 flex items-center justify-between border-b border-stone-50/30">
    //     <div className="flex items-center">
    //       <svg
    //         stroke="currentColor"
    //         fill="currentColor"
    //         strokeWidth="0"
    //         viewBox="0 0 448 512"
    //         className="text-4xl text-green-600 lg:text-5xl"
    //         height="1em"
    //         width="1em"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path>
    //       </svg>
    //       <h3 className="px-6 text-lg lg:text-2xl">Node.js</h3>
    //     </div>
    //     <div className="text-md font-semibod lg:text-xl">
    //       <span>1+ years</span>
    //     </div>
    //   </div>
    //   <div className="py-6 flex items-center justify-between border-b border-stone-50/30">
    //     <div className="flex items-center">
    //       <svg
    //         stroke="currentColor"
    //         fill="none"
    //         strokeWidth="2"
    //         viewBox="0 0 24 24"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         className="text-4xl text-white lg:text-5xl"
    //         height="1em"
    //         width="1em"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
    //         <path d="M15 12v-3"></path>
    //       </svg>
    //       <h3 className="px-6 text-lg lg:text-2xl">Next.js</h3>
    //     </div>
    //     <div className="text-md font-semibod lg:text-xl">
    //       <span>1 year</span>
    //     </div>
    //   </div>

    //   <div className="py-6 flex items-center justify-between border-b border-stone-50/30">
    //     <div className="flex items-center">
    //       <svg
    //         stroke="currentColor"
    //         fill="currentColor"
    //         strokeWidth="0"
    //         role="img"
    //         viewBox="0 0 24 24"
    //         className="text-4xl text-green-600 lg:text-5xl"
    //         height="1em"
    //         width="1em"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
    //       </svg>
    //       <h3 className="px-6 text-lg lg:text-2xl">MongoDB</h3>
    //     </div>
    //     <div className="text-md font-semibod lg:text-xl">
    //       <span>1 years</span>
    //     </div>
    //   </div>
    // </div>
  );
}
