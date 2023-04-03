import { PictureContainer, ArrowBack, ArrowForward } from "./carousel.styles";
import { useState } from "react";

export type CarouselProps = {
  articleName: string;
  images: string[];
};

function Carousel({ articleName, images }: CarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImages = () => {
    const max = images.length;

    if (imageIndex < max - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };

  const prevImages = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(images.length - 1);
    }
  };

  return (
    <PictureContainer>
      <ArrowBack onClick={prevImages} />
      <img src={images[imageIndex]} alt={articleName} />
      <ArrowForward onClick={nextImages} />
    </PictureContainer>
  );
}

export default Carousel;
