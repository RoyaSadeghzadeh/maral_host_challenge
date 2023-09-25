import React from "react";
import { Box } from "..";
import { Logo } from "@/assets";
import Image from "next/image";

export const AuthHeroSection: React.FC = () => {
  return (
    <Box className="rounded-[48px] h-full flex items-center justify-center">
      <Image alt="" width={100} height={100} className="w-auto" src={Logo} />
    </Box>
  );
};
