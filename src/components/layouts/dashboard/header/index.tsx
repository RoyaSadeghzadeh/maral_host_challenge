"use client"
import { FaveIcon, HeadPhoneIcon, userAvatar } from "@/assets";
import { Avatar, Box, Button, Navbar, Text } from "@/components";
import Image from "next/image";
import { useState } from "react";
import { MobileNavbar } from "./MobileNavbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(true);

  function closeMenuMobile() {
    setIsOpenMenuMobile(false);
  }

  function openMenuMobile() {
    setIsOpenMenuMobile(true);
  }
  return (
    <Box className="">
      <Box className=" bg-white h-[72px] py-6 border-b border-line-1 flex items-center">
        <Box className="flex items-center justify-between container">
          <Image alt="" width={33} height={33} src={FaveIcon} />
          <Box className="flex items-center gap-4 !w-fit">
            <Avatar src={userAvatar} />
            <Text className="!text-lg !text-dark-1">Iman Yousefi</Text>
          </Box>
        </Box>
      </Box>
      <Box className="bg-white h-[72px] py-6 border-b border-line-1 flex items-center">
        <Box className="flex items-center justify-between container">
          <Box className="hidden lg:block">
            <Navbar />
          </Box>
          <MobileNavbar
            isOpenMenuMobile={isOpenMenuMobile}
            closeMenuMobile={closeMenuMobile}
          />
          <Box onClick={openMenuMobile} className="block lg:hidden cursor-pointer">menu</Box>
          <Button
            iconClassName="!w-6 !h-6"
            className=" !rounded-full !w-fit !h-14 sm:!h-[42px] !bg-primary-3 !text-lg relative !px-4"
            startIcon={HeadPhoneIcon}>
            Support
            <span className="block bg-primary-4 w-4 h-4 sm:w-3 sm:h-3 rounded-full border-[2px] border-white absolute top-0 right-0" />
          </Button>
        </Box>
      </Box>
      <Box className="container py-14">{children}</Box>
    </Box>
  );
};
