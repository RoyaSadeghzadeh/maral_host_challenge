import Image from "next/image";
import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconClassName?: string;
  startIcon?: string;
  endIcon?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  className = "",
  iconClassName = "",
  startIcon = "",
  endIcon = "",
  children,
  ...rest
}) => {
  const buttonStyle = `font-Inter text-sm py-2 px-4 rounded bg-primary-1 text-white rounded-lg h-[56px] w-full flex items-center justify-center gap-3 ${className}`;

  return (
    <button className={buttonStyle} {...rest}>
      {startIcon && (
        <Image
          alt=""
          width={20}
          height={20}
          src={startIcon}
          className={`${iconClassName}`}
        />
      )}
      {children}
      {endIcon && (
        <Image
          alt=""
          width={20}
          height={20}
          src={endIcon}
          className={`${iconClassName}`}
        />
      )}
    </button>
  );
};
