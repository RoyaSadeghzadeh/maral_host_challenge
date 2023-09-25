import React, { HTMLProps } from "react";

interface CustomBoxProps extends HTMLProps<HTMLDivElement> {
  className?: string;
}

export const CustomBox: React.FC<CustomBoxProps> = ({
  className = "",
  children,
  ...rest
}) => {
  // Build Tailwind CSS classes for the box based on the provided props.
  const boxStyle = `${className} w-full`;

  return (
    <div className={boxStyle} {...rest}>
      {children}
    </div>
  );
};

