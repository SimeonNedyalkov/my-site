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
import Education from "./Education";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [onFirstCheck, isOnFirstCheck] = useState(false);
  const [loadIcos, isLoadIcos] = useState(false);
  const [showOneByOne, isShownOneByOne] = useState<number>(0);
  useEffect(() => {
    if (isVisible && !onFirstCheck) {
      isOnFirstCheck(true);
    }
  }, [isVisible, onFirstCheck]);
  useEffect(() => {
    const startLoadingIcons = setTimeout(() => {
      arrayOfContactIcons.forEach((_, index) => {
        setTimeout(() => {
          isShownOneByOne((prev) => prev + 1);
        }, index * 1000);
      });
      isLoadIcos(true);
    }, 3000);

    return () => clearTimeout(startLoadingIcons);
  }, []);

  const arrayOfProjects = [
    {
      name: "Cat Date",
      desc: "Cat-Date is a fun and interactive Angular-based application, inspired by Tinder, designed exclusively for connecting cats and their owners. Swipe right to find the perfect playmate for your feline friend, schedule playdates, and join a community of cat enthusiasts!",
      url: img1,
      alt: "Image1",
      demoUrl:
        "https://cat-date-client-rjvqbqxmb-simeonnedyalkovs-projects.vercel.app/",
      projectCode: "https://github.com/SimeonNedyalkov/Cat-Date-Angular",
    },
    {
      name: "Choose Your Figher",
      desc: '" Choose Your Fighter " is a React project where users pick characters like bears, sharks, octopuses, and eagles to battle against the app itself. It demonstrates React skills, interactive UI design, state management, and game logic implementation for an engaging gaming experience.',
      url: img2,
      alt: "Image2",
      demoUrl: "https://choose-your-fighter-client.vercel.app/",
      projectCode:
        "https://github.com/SimeonNedyalkov/Choose-Your-Figher-React",
    },
    {
      name: "Magma Heaven",
      desc: "App made with Node.js, Express.js, mongoose, cookie-parser, jsonwebtoken, handlebars, bcypt, express-validators.",
      url: img3,
      alt: "Image3",
      demoUrl: "no",
      projectCode: "https://github.com/SimeonNedyalkov/02.MagmaHeaven",
    },
    {
      name: "Earth Treasure Vault",
      desc: "App made on NodeJs with express, mongoose, cookie-parser, jsonwebtoken, handlebars, bcypt and express-validators",
      url: img4,
      alt: "Image4",
      demoUrl: "no",
      projectCode: "https://github.com/SimeonNedyalkov/01.EarthTreasureVault",
    },
    {
      name: "Movie Magic",
      desc: "App made with Node.js, Express.js, mongoose, cookie-parser, jsonwebtoken, handlebars, bcypt, express-validators.",
      url: img5,
      alt: "Image5",
      demoUrl: "no",
      projectCode: "https://github.com/SimeonNedyalkov/movie-magic",
    },
  ];
  const arrayOfContactIcons = [
    {
      ico: githubIco,
      alt: "github",
      href: "https://github.com/SimeonNedyalkov/",
    },
    {
      ico: linedInIco,
      alt: "linkedIn",
      href: "https://www.linkedin.com/in/simeon-nedyalkov-3a62b616a/",
    },
    {
      ico: facebookIco,
      alt: "facebook",
      href: "https://www.facebook.com/profile.php?id=100001718120923",
    },
  ];
  return (
    <div id="home" className="homeAll mt-30 antialiased">
      <div className="homeContainer">
        <div className="vertical-icons">
          <div className="v-line"></div>
          {loadIcos &&
            arrayOfContactIcons.slice(0, showOneByOne).map((i) => (
              <a key={i.ico} href={i.href} target="_blank">
                <img src={i.ico} alt={i.alt} className="icons" />
              </a>
            ))}
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
        <Slider projects={arrayOfProjects}></Slider>
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
      <section id="education">
        <Education />
      </section>
    </div>
  );
}
