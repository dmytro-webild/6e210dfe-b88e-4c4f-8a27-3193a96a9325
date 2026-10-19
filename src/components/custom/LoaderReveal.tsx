import React from "react";

interface LoaderRevealProps {
  imageSrc?: string;
  title?: string;
  onComplete?: () => void;
}

const CustomLoaderReveal = ({ onComplete }: LoaderRevealProps) => {
  if (onComplete) {
    onComplete();
  }
  return null;
};

export default CustomLoaderReveal;
