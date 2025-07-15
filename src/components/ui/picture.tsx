import React, { useEffect, useState } from "react";
import useImageStore from "../../../useImageStore";

interface SmartImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const Picture: React.FC<SmartImageProps> = ({ src, alt = "", className }) => {
  const [showImage, setShowImage] = useState(false);
  const { isLoaded, markAsLoaded } = useImageStore();

  useEffect(() => {
    if (isLoaded(src)) {
      setShowImage(true);
    } else {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        markAsLoaded(src);
        setShowImage(true);
      };
    }
  }, [src, isLoaded, markAsLoaded]);

  return showImage ? <img src={src} alt={alt} className={className} /> : null;
};

export default Picture;
