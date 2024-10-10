import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

type ImageSliderProps = {
  projects: {
    name: string;
    desc: string;
    url: string;
    alt: string;
    demoUrl: string;
    liveSiteUrl: string;
  }[];
};

export default function Slider({ projects }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageName, setImageName] = useState("");
  const [projectDesc, setprojectDesc] = useState("");
  const [projectDemoUrl, setProjectDemoUrl] = useState("");
  const [projectLiveSiteUrl, setProjectLiveSiteUrl] = useState("");
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateprojectDesc, setAnimateProjectDesc] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index === projects.length - 1 ? 0 : index + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [projects.length, imageIndex]);

  useEffect(() => {
    projects.map((i, index) => {
      if (index === imageIndex) {
        setImageName(i.name);
        setprojectDesc(i.desc);
        setProjectDemoUrl(i.demoUrl);
        setProjectLiveSiteUrl(i.liveSiteUrl);
        setAnimateTitle(true);
        setAnimateProjectDesc(true);
        setTimeout(() => {
          setAnimateTitle(false);
          setAnimateProjectDesc(false);
        }, 2100);
      }
    });
  }, [imageIndex]);

  function previousImage() {
    setImageIndex((index) => (index === 0 ? projects.length - 1 : index - 1));
  }

  function nextImage() {
    setImageIndex((index) => (index === projects.length - 1 ? 0 : index + 1));
  }

  return (
    <div className="sliderWrapper">
      <div className="contentSide">
        <h2 className={animateTitle ? "projectTitle mb-2" : "mb-2"}>
          {imageName}
        </h2>
        <div
          className={
            animateTitle
              ? "projectLine border-b border-stone-50/30"
              : "border-b border-stone-50/30"
          }
        ></div>
        <p className={animateprojectDesc ? "projectDesc" : ""}>{projectDesc}</p>
      </div>
      <div className="sliderContainer">
        <div style={{ overflow: "hidden", display: "flex" }}>
          {projects.map(({ url, alt }, index) => (
            <img
              key={url}
              alt={alt}
              src={url}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
              aria-hidden={imageIndex !== index}
            />
          ))}
        </div>

        <button
          className="img-slider-button prev-button"
          onClick={previousImage}
          aria-label="viewPreviousImage"
        >
          <ArrowBigLeft aria-hidden />
        </button>
        <button
          className="img-slider-button next-button"
          onClick={nextImage}
          aria-label="viewNextImage"
        >
          <ArrowBigRight aria-hidden />
        </button>

        <div className="img-dot-container">
          {projects.map((_, index) => (
            <button
              key={index}
              className="img-dot-buttons"
              onClick={() => setImageIndex(index)}
              aria-label={`viewImage ${index}`}
            >
              {index === imageIndex ? (
                <CircleDot aria-hidden className="ifDot" />
              ) : (
                <Circle aria-hidden />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="contentSide">
        <a href={projectDemoUrl} target="_blank" rel="noopener noreferrer">
          View Demo
        </a>
        <br />
        <a href={projectLiveSiteUrl} target="_blank" rel="noopener noreferrer">
          View Live Site
        </a>
      </div>
    </div>
  );
}
