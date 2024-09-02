import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type ImageSliderProps = {
  imgUrls: string[];
};
export default function Slider({ imgUrls }: ImageSliderProps) {
  const [imageIndex, setimageIndex] = useState(0);

  function previousImage() {}
  function nextImage() {}
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
