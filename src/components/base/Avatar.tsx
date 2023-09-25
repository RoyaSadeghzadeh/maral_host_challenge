import Image from "next/image";
import React, { HTMLProps } from "react";

interface CustomAvatarProps extends HTMLProps<HTMLImageElement> {
  className?: string;
  src: any;
}

export const CustomAvatar: React.FC<CustomAvatarProps> = ({
  className = "",
  src,
  children,
  ...rest
}) => {
  // Build Tailwind CSS classes for the avatar based on the provided props.
  const avatarStyle = `${className} rounded-full`;

  return <Image alt="" width={32} height={32} className={avatarStyle} src={src} />;
};
