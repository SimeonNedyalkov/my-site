import img1 from "../assets/projects/Screenshot 2024-09-01 155000.png";
import img2 from "../assets/projects/Screenshot 2024-09-01 155050.png";
import img3 from "../assets/projects/Screenshot 2024-09-01 161416.png";
import img4 from "../assets/projects/Screenshot 2024-09-05 212729.png";
import img5 from "../assets/projects/Screenshot 2024-09-05 212941.png";
import githubIco from "../assets/contact-icons/github-svgrepo-com.svg";
import linedInIco from "../assets/contact-icons/linkedin-svgrepo-com.svg";
import facebookIco from "../assets/contact-icons/facebook-boxed-svgrepo-com.svg";
import Bio from "./Bio";
import Code from "./Code";
import Slider from "./Slider";
import picture from "../assets/me/received_737729346932518.jpeg";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../hooks/targetElement";
import Skills from "./Skills";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [onFirstCheck, isOnFirstCheck] = useState(false);
  const [loadIcos, isLoadIcos] = useState(false);
  useEffect(() => {
    if (isVisible && !onFirstCheck) {
      isOnFirstCheck(true);
    }
  }, [isVisible, onFirstCheck]);

  const arrayOfImages = [
    { url: img1, alt: "Image1" },
    { url: img2, alt: "Image2" },
    { url: img3, alt: "Image3" },
    { url: img4, alt: "Image4" },
    { url: img5, alt: "Image5" },
  ];
  const arrayOfContactIcons = [
    { githubIco: githubIco, alt: "github" },
    { linedInIco: linedInIco, alt: "linkedIn" },
    { facebookIco: facebookIco, alt: "facebook" },
  ];
  return (
    <div id="home" className="homeAll mt-30 antialiased">
      <div className="homeContainer">
        <div className="vertical-icons">
          <div className="v-line"></div>
          <a href="https://github.com/SimeonNedyalkov/">
            <img src={githubIco} alt="github" width={25} height={25} />
          </a>
          <a href="https://www.linkedin.com/in/simeon-nedyalkov-3a62b616a/">
            <img src={linedInIco} width={25} height={25} alt="email" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100001718120923">
            <img src={facebookIco} alt="discord" width={25} height={25} />
          </a>
        </div>

        <div className="homeText">
          <h1>SIMEON NEDYALKOV</h1>
          <h2>Hello World! 👋</h2>
          <p>
            I'm a passionate junior frontend developer with a keen eye for
            design and a love for crafting intuitive user experiences. I enjoy
            turning ideas into reality using the latest web technologies. Let's
            build something amazing together!
          </p>
        </div>
        <img className="profilePicture" src={`${picture}`} alt="me" />
      </div>

      {/* Attach ref to the section you want to observe */}
      <section id="projects">
        <Slider images={arrayOfImages}></Slider>
      </section>

      <section id="bio">
        <div className="w-6/12">
          <Bio />
        </div>
        <div className="homeCode">
          <Code></Code>
        </div>
      </section>
      <section
        ref={ref}
        id="skills"
        className={onFirstCheck ? "dynamicBackground1 text-7xl" : "text-7xl"}
      >
        <Skills></Skills>
      </section>
    </div>
  );
}
