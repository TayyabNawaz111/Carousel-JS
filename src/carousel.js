import { useState } from "react";
import "../src/style.css";
const images = [
  "https://source.unsplash.com/1300x800/?nature",
  "https://source.unsplash.com/1300x800/?cricket",
  "https://source.unsplash.com/1300x800/?bat",
  "https://source.unsplash.com/1300x800/?shopping",
];

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const next = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const previous = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div className="container">
      <div className="slider">
        <button className="prev" onClick={previous}>
          Previous
        </button>
        <img src={images[currentImage]} />
        <button className="next" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
