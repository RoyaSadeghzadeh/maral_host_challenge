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
import { Fragment } from "react";

export const LoginForm = () => {

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
      lable: "Password",
      type: "password",
      placeholder: "Enter Your Password",
      defaultValue: "123456",
    },
  ];
  return (
    <Box className="flex flex-col gap-8">
      <Box>
        <Heading>Login</Heading>
        <Text>Welcome back! Please enter your details.</Text>
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
        <Box className="flex items-center gap-3 mt-4">
          <hr className="flex-1" />
          <Text className="!text-sm !text-typograhy-4 whitespace-nowrap">
            or Sign in with Email
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
        <Checkbox label="Remember me" />
        <Link href="">Forgot Password</Link>
      </Box>
      <Box className="flex flex-col gap-6">
        <Link href="/landing/dashboard">
          <Button>Login</Button>
        </Link>
        <Text className=" !text-lg !text-typograhy-1 text-center flex items-center gap-2">
          Not registered yet?
          <Link className="!text-lg" href="/auth/signup">
            Create an Account
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
