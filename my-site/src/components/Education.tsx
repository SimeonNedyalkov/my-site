import { useRef } from "react";
import useOnScreen from "../hooks/targetElement";
import softuniLogo from "../assets/softuni/R.png";

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
          <h2>JavaScript Web Developer</h2>
          <h2 className="flex">
            <img src={softuniLogo} width={50} height={50} alt="" />
            Software University
          </h2>
          <h3>(January 2023 - September 2024)</h3>
          <p>
            As a JavaScript Full-Stack Developer trainee, I have gained solid
            practical programming skills, including logical thinking and
            problem-solving abilities,component testing, data structures and
            algorithms, object-oriented and functional programming, and the
            ability to write high-quality code. I have specialized in developing
            modern web applications using contemporary web technologies, tools,
            and frameworks within the JavaScript ecosystem. My training has
            covered HTML, CSS, JavaScript, jQuery, Angular, React, Node.js,
            Express.js, SASS, Bootstrap, Single Page Applications (SPA), RESTful
            services, and DOM. Additionally, I have experience with Git, GitHub,
            and collaboration tools for effective team development.
          </p>
        </div>
      </div>
    </div>
  );
}
