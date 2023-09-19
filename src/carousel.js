import { useState } from "react";
const images = [
  {
    url: "https://www.pexels.com/photo/tailor-measuring-shoulder-of-mannequin-in-light-studio-7147968/",
    index: 1,
  },
  {
    url: "https://www.pexels.com/photo/textured-rocky-surface-of-black-and-white-colors-7794444/",
    index: 2,
  },
  {
    url: "https://www.pexels.com/photo/set-of-ceramic-saucers-near-instant-photo-4792350/",
    index: 3,
  },
  {
    url: "https://www.pexels.com/photo/old-fashioned-car-with-shiny-polished-surface-4969923/",
    index: 4,
  },
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
    <div>
    </div>
  );
}
