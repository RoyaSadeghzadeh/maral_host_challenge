import React, { ReactNode } from "react";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Link
      className={`text-primary-1 font-Inter text-sm font-bold ${className}`}
      href={href}>
      {children}
    </Link>
  );
};
