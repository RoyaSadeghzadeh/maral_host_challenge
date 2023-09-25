import Image from "next/image";
import React, { HTMLProps } from "react";

interface CustomHeadingProps extends HTMLProps<HTMLParagraphElement> {
  startIcon?: string;
  className?: string;
}

export const CustomHeading: React.FC<CustomHeadingProps> = ({
  className = "",
  startIcon = "",
  children,
  ...rest
}) => {
  const textStyle = `${className} font-bold font-Inter text-3xl text-typograhy-1 block mb-4 flex items-center gap-3`;

  return (
    <span className={textStyle} {...rest}>
      {startIcon && <Image alt="" width={26} height={26} src={startIcon} />}
      {children}
    </span>
  );
};
