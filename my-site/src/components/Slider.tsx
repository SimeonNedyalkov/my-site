import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export default function Slider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  function previousImage() {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  function nextImage() {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  return (
    <div className="sliderWrapper">
      <div className="contentSide">
        <h2>Some Title</h2>
        <p>Some text or a call to action can go here.</p>
      </div>
      <div className="sliderContainer">
        <div style={{ overflow: "hidden", display: "flex" }}>
          {images.map(({ url, alt }, index) => (
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
          className="img-slider-button"
          style={{ left: 0 }}
          onClick={previousImage}
          aria-label="viewPreviousImage"
        >
          <ArrowBigLeft aria-hidden />
        </button>
        <button
          className="img-slider-button"
          style={{ right: 0 }}
          onClick={nextImage}
          aria-label="viewNextImage"
        >
          <ArrowBigRight aria-hidden />
        </button>
        <div
          style={{
            position: "absolute",
            bottom: "0.1rem",
            left: "50%",
            translate: "-50%",
            display: "flex",
            gap: "1rem",
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              className="img-dot-buttons"
              onClick={() => setImageIndex(index)}
              aria-label={`viewImage ${index}`}
            >
              {index === imageIndex ? (
                <CircleDot aria-hidden />
              ) : (
                <Circle aria-hidden />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="contentSide">
        <h2>Another Title</h2>
        <p>Additional content can go here.</p>
      </div>
    </div>
  );
}
