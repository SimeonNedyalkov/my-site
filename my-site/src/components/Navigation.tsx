import "../styles/navigation.css";
import logo from "../assets/logo/S1_transparent-.png";
import logo2 from "../assets/logo/N_transparent-.png";
import { Link } from "react-scroll";
export default function Navigation() {
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <Link
                className="flex items-center cursor-pointer"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <img
                  src={`${logo}`}
                  className="position: absolute left-3"
                  width="100"
                  alt="logo"
                />
                <img
                  src={`${logo2}`}
                  className="position: absolute left-6"
                  width="100"
                  alt="logo"
                />
              </Link>
            </div>
            <div>
              <ul className="flex items-center gap-6">
                <li>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-sm hover:text-green-400 cursor-pointer"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:text-green-400 cursor-pointer"
                    to="bio"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Bio
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:text-green-400 cursor-pointer"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:text-green-400 cursor-pointer"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Education
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-lg backdrop-blur-md lg:hidden ">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img
                  src="/assets/logo-CVscTaAv.png"
                  alt="logo"
                  width="25"
                  className="m-2"
                />
              </a>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none lg:hidden">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="m-2 h-6 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
