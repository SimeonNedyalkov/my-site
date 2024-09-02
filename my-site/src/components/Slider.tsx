import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

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
      <img src={imgUrls[imageIndex]} alt={`Slide ${imageIndex}`} />
      <button
        className="img-slider-button"
        style={{ left: 0 }}
        onClick={previousImage}
      >
        <ArrowBigLeft />
      </button>
      <button
        className="img-slider-button"
        style={{ right: 0 }}
        onClick={nextImage}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}
