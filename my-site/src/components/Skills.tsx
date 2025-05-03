import TS from "../assets/skills/typescript-icon-svgrepo-com.svg";
import JS from "../assets/skills/javascript-logo-svgrepo-com.svg";
import PY from "../assets/skills/python-svgrepo-com.svg";
import Ang from "../assets/skills/angular-svgrepo-com.svg";
import React from "../assets/skills/react-javascript-js-framework-facebook-svgrepo-com.svg";
import NodeJS from "../assets/skills/node-js-svgrepo-com.svg";
import Flask from "../assets/skills/flask-svgrepo-com.svg";
import NestJS from "../assets/skills/nestjs-svgrepo-com.svg";
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
        { framework: "NestJS", svg: NestJS, years: "1+" },
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
    <div className="skillsAll flex flex-col gap-3">
      <div className="skillsForMobile">Skills</div>
      <div className="skillsAll1">
        <div className="skillsAll2 mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
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
        <div className="skillsAll2 mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
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
        <div className="skillsAll2 mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
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
      <div className="skillsAll2 mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
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
  );
}
