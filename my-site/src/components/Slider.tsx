import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

type ImageSliderProps = {
  imgUrls: string[];
};
export default function Slider({ imgUrls }: ImageSliderProps) {
  const [imageIndex, setimageIndex] = useState(0);

  function previousImage() {
    setimageIndex((index) => {
      if (index === 0) {
        return imgUrls.length - 1;
      }
      return index - 1;
    });
  }
  function nextImage() {
    setimageIndex((index) => {
      if (index === imgUrls.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }
  return (
    <div className="sliderContainer">
      <div style={{ overflow: "hidden", display: "flex" }}>
        {imgUrls.map((url) => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <button
        className="img-slider-button"
        style={{ left: 0 }}
        onClick={previousImage}
        aria-label="viewPreviousImage"
      >
        <ArrowBigLeft />
      </button>
      <button
        className="img-slider-button"
        style={{ right: 0 }}
        onClick={nextImage}
        aria-label="viewNextImage"
      >
        <ArrowBigRight />
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
        {imgUrls.map((_, index) => (
          <button
            key={index}
            className="img-dot-buttons"
            onClick={() => setimageIndex(index)}
            aria-label={`viewImage ${index}`}
          >
            {index === imageIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
}
