"use client";
import { HidePasswordIcon, ShowPasswordIcon } from "@/assets";
import Image from "next/image";
import React, { InputHTMLAttributes, useState } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  containerClassName?: string;
  inputBoxClassName?:string,
  inputClassName?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  defaultValue,
  type,
  containerClassName,
  inputBoxClassName,
  inputClassName,
  ...rest
}) => {
  /* for manage show and hide password input */
  const [inputType, setInputType] = useState(type);

  /* for handle focuse on input */
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`bg-white flex flex-col flex-start gap-2 ${containerClassName}`}>
      {label && (
        <label className="text-typograhy-1 text-sm font-manrope">{label}</label>
      )}
      <div
        className={`flex h-[48px] py-3 px-4 border rounded-xl items-center gap-2 ${inputBoxClassName} ${isFocused ? ' border-primary-1 shadow-primary bg-white':'border-typograhy-4'}`}>
        <input
          placeholder={placeholder}
          type={inputType}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full border-0 font-Inter focus:border-0 flex-1 focus:ring-0 focus:outline-none text-typograhy-4 placeholder:text-typograhy-4 placeholder:text-sm tex-sm ${inputClassName}`}
          {...rest}
        />

        {
          /* for manage show and hide password input */
          type == "password" && (
            <>
              {inputType === "password" && (
                <div
                  className="cursor-pointer"
                  onClick={() => setInputType("text")}>
                  <Image alt="" width={24} height={24} src={ShowPasswordIcon} />
                </div>
              )}
              {inputType === "text" && (
                <div
                  className="cursor-pointer"
                  onClick={() => setInputType("password")}>
                  <Image alt="" width={24} height={24} src={HidePasswordIcon} />
                </div>
              )}
            </>
          )
        }
      </div>
    </div>
  );
};
