import { useState } from "react";
const images = [
  {
    url: "https://unsplash.com/photos/a-mountain-range-is-reflected-in-the-still-water-of-a-lake-6EkCaZCuDIc",
    index: 1,
  },
  {
    url: "https://unsplash.com/photos/a-table-topped-with-two-bowls-of-food-CEJ22E6EXXY",
    index: 2,
  },
  {
    url: "https://unsplash.com/photos/bEJYDz4cM2I",
    index: 3,
  },
  {
    url: "https://unsplash.com/photos/anozjF6uqI0",
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
  return <div></div>;
}
