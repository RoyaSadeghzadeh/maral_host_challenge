import React, { HTMLProps } from "react";

interface CustomTextProps extends HTMLProps<HTMLParagraphElement> {
  className?: string;
}

export const CustomText: React.FC<CustomTextProps> = ({
  className = "",
  children,
  ...rest
}) => {
  const textStyle = `${className} text-xl text text-typograhy-2`;

  return (
    <p className={textStyle} {...rest}>
      {children}
    </p>
  );
};