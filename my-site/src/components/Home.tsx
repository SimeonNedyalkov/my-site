import img1 from "../assets/projects/Screenshot 2024-09-01 155000.png";
import img2 from "../assets/projects/Screenshot 2024-09-01 155050.png";
import img3 from "../assets/projects/Screenshot 2024-09-01 161416.png";
import img4 from "../assets/projects/Screenshot 2024-09-05 212729.png";
import img5 from "../assets/projects/Screenshot 2024-09-05 212941.png";
import Bio from "./Bio";
import Code from "./Code";
import Slider from "./Slider";
import picture from "../assets/me/received_737729346932518.jpeg";

export default function Home() {
  const arrayOfImages = [
    { url: img1, alt: "Image1" },
    { url: img2, alt: "Image2" },
    { url: img3, alt: "Image3" },
    { url: img4, alt: "Image4" },
    { url: img5, alt: "Image5" },
  ];

  return (
    <div className="homeAll mt-30">
      <div className="homeContainer">
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
      <section id="projects">
        <Slider images={arrayOfImages}></Slider>
      </section>
      <section id="bio" className="flex gap-2">
        <div className="w-6/12">
          <Bio />
        </div>
        <div className="homeCode">
          <Code></Code>
        </div>
      </section>
    </div>
  );
}
