import { StaticImageData } from "next/image";
import Image from "next/image";

export interface SlideProps {
  idx: number;
  imageSrc: StaticImageData;
  alt: string;
}

const Slide = ({ imageSrc, alt, idx }: SlideProps) => {
  return (
    <li key={idx}>
      <Image src={imageSrc} alt={alt} />
    </li>
  );
};

export default Slide;
