import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, HTMLProps } from "react";
import { Navbar } from "./Navber";

interface MobileNavbarProps extends HTMLProps<HTMLDivElement> {
  closeMenuMobile?: any;
  isOpenMenuMobile?: boolean;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  closeMenuMobile = false,
  isOpenMenuMobile = false,
}) => {
  return (
    <Transition appear show={isOpenMenuMobile} as={Fragment}>
      <Dialog
        as="div"
        className="bg-black block lg:hidden"
        onClose={closeMenuMobile}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div
            className="fixed inset-0 bg-black/70 z-[99]"
            aria-hidden="true"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="-left-full"
          enterTo="left-0"
          leave="ease-in duration-300"
          leaveFrom="opacity left-0"
          leaveTo="opacity-0 -left-full">
          <Dialog.Panel className="w-4/5 max-w-[380px] transform overflow-hidden z-[999] fixed left-0 top-0 h-screen transition-all bg-white py-20 px-10">
            <Navbar />
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
