import { GithubIcon, GoogleIcon } from "@/assets";
import {
  Box,
  Button,
  Checkbox,
  Heading,
  Input,
  Link,
  Text,
} from "@/components";
import { ROOT_PATHS } from "@/utils/path";
import { Fragment } from "react";

export const SignupForm = () => {
  const loginBouttons = [
    {
      text: "Sign in with Google",
      startIcon: GoogleIcon,
    },
    {
      text: "Sign in with Github",
      startIcon: GithubIcon,
    },
  ];
  const formInputs = [
    {
      lable: "Email",
      type: "email",
      placeholder: "Enter Your Email",
    },
    {
      lable: "Name",
      type: "text",
      placeholder: "Enter Your Name",
    },
    {
      lable: "Password",
      type: "password",
      placeholder: "Enter Your Password",
      defaultValue: "123456",
    },
    {
      lable: "Re-enter Password",
      type: "password",
      placeholder: "Re-Enter Your Password",
      defaultValue: "123456",
    },
  ];
  return (
    <Box className="flex flex-col gap-8">
      <Box>
        <Heading>Getting Started</Heading>
        <Text>Create an account to continue!</Text>
      </Box>
      <Box className="flex flex-col gap-2">
        {loginBouttons.map((button, index) => (
          <Fragment key={index}>
            <Button
              className="bg-white rounded-lg border border-background-2 !text-typograhy-1"
              startIcon={button.startIcon}>
              {button.text}
            </Button>
          </Fragment>
        ))}
        <Box className="flex items-center gap-3 mt-4 text-typograhy-1">
          <hr className="flex-1" />
          <Text className="!text-sm !text-typograhy-1 whitespace-nowrap">
            or Sign Up with Email
          </Text>
          <hr className="flex-1" />
        </Box>
      </Box>
      <Box className="flex flex-col gap-6">
        {formInputs.map((input, index) => (
          <Fragment key={index}>
            <Input
              label={input.lable}
              placeholder={input.placeholder}
              type={input.type}
              defaultValue={input.defaultValue || ""}
            />
          </Fragment>
        ))}
      </Box>
      <Box className="flex items-center justify-between">
        <Checkbox label="I agree to the Terms & Conditions" />
        <Link href="" className="!text-primary-2">
          Strong
        </Link>
      </Box>
      <Box className="flex flex-col gap-6">
        <Link href={ROOT_PATHS.auth.verification}>
          <Button>Sign Up</Button>
        </Link>
        <Text className=" !text-lg !text-typograhy-1 text-left flex items-center gap-2">
          Already have an account?
          <Link className="!text-lg" href={ROOT_PATHS.auth.login}>
            Sign In
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
