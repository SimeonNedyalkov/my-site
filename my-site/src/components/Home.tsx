import img1 from "../assets/projects/Screenshot 2024-09-01 155000.png";
import img2 from "../assets/projects/Screenshot 2024-09-01 155050.png";
import img3 from "../assets/projects/Screenshot 2024-09-01 161416.png";
import img4 from "../assets/projects/Screenshot 2024-09-05 212729.png";
import img5 from "../assets/projects/Screenshot 2024-09-05 212941.png";
import Bio from "./Bio";
import Code from "./Code";
import Slider from "./Slider";

export default function Home() {
  const arrayOfImages = [
    { url: img1, alt: "Image1" },
    { url: img2, alt: "Image2" },
    { url: img3, alt: "Image3" },
    { url: img4, alt: "Image4" },
    { url: img5, alt: "Image5" },
  ];

  return (
    <div className="homeAll">
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg w-10/12">
        <Bio />
      </div>
      <div className="homeContainer">
        <div className="homeAboutMe">
          <div className="bg-gray-800 flex items-center justify-between p-3 rounded-t-md border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 bg-gray-700 text-gray-300 rounded-md">
                Command Prompt
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <div
                className="w-3.5 h-3.5 rounded-full bg-red-500 transition-transform transform hover:scale-110"
                title="Close"
              ></div>
              <div
                className="w-3.5 h-3.5 rounded-full bg-yellow-500 transition-transform transform hover:scale-110"
                title="Minimize"
              ></div>
              <div
                className="w-3.5 h-3.5 rounded-full bg-green-500 transition-transform transform hover:scale-110"
                title="Maximize"
              ></div>
            </div>
          </div>

          <div className="terminal bg-black text-green-300 p-4 rounded-md shadow-lg font-mono text-xl md:text-2xl lg:text-3xl leading-snug">
            <p className="mb-2">
              <span className="text-green-500">$</span> echo "Introducing
              myself..."
            </p>
            <p className="ml-4">
              <span className="text-green-500">{">>>"}</span> A passionate{" "}
              <span className="text-green-400">junior developer</span>
            </p>
            <p className="ml-4">
              <span className="text-green-500">{">>>"}</span> eager to make a
              difference
            </p>
            <p className="ml-4">
              <span className="text-green-500">{">>>"}</span>{" "}
              <span className="text-pink-500">in the industry</span>
            </p>
            <p className="mt-4">
              <span className="text-green-500">$</span> _
            </p>
          </div>

          <a
            className="exploreProjects group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-lime-500 to-green-600  transition-all duration-200 ease-out hover:text-white hover:no-underline"
            role="button"
            href="https://github.com/SimeonNedyalkov/"
            target="_blank"
          >
            Explore My Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-4 inline-block transition-all duration-200 ease-out group-hover:ml-3"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        <div className="homeCode">
          <Code></Code>
        </div>
      </div>
      <Slider images={arrayOfImages}></Slider>
    </div>
  );
}
