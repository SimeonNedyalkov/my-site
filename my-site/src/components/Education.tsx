import { useRef } from "react";
import useOnScreen from "../hooks/targetElement";
import vfulogo from "../assets/education/R (1).png";
import softuniLogo from "../assets/education/R.png";

export default function Education() {
  const refTitle = useRef<HTMLDivElement>(null);
  const isTitleVisible = useOnScreen(refTitle);
  const refText = useRef<HTMLDivElement>(null);
  const isTextVisible = useOnScreen(refText);
  return (
    <div className="educationContainer">
      <div className="softuni">
        <div className="educationTitle">
          <h1 ref={refTitle} className={isTitleVisible ? "slideInTop" : ""}>
            Education
          </h1>
        </div>
        <div ref={refText} className={isTextVisible ? "fadeInScreen" : ""}>
          <h2>Software Engineering and Management</h2>
          <h2 className="flex">
            <img
              src={vfulogo}
              width={100}
              height={100}
              alt=""
              className="vfuLogo mr-3"
            />
            Varna Free University " Chernorizets Hrabar "
          </h2>
          <h3>(November 2024 - till now)</h3>
          <p>
            I am currently studying Software Engineering and Management, with a
            focus on software development, system analysis, and project
            management. The program equips me with skills in programming,
            algorithms, and team collaboration using agile methodologies,
            preparing me to oversee and contribute to complex software projects
            effectively.
          </p>
        </div>
        <div
          ref={refText}
          className={isTextVisible ? "mt-10 fadeInScreen" : "mt-10"}
        >
          <h2>JavaScript Web Developer</h2>
          <h2 className="flex">
            <img src={softuniLogo} width={50} height={50} alt="" />
            Software University
          </h2>
          <h3>(January 2023 - September 2024)</h3>
          <p>
            As a JavaScript Full-Stack Developer trainee, I developed skills in
            web development using modern tools and frameworks, including HTML,
            CSS, JavaScript, React, Angular and Node.js. I also gained
            experience in testing, algorithms, databases, object-oriented and
            functional programming and version control with Git.
          </p>
        </div>
      </div>
    </div>
  );
}
