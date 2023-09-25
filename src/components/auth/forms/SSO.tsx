import { SmartKeyIcon } from "@/assets";
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

export const SSOForm = () => {
  const formInputs = [
    {
      lable: "Organization’s name",
      type: "text",
      placeholder: "Enter your organization",
    },
  ];

  return (
    <Box className="flex flex-col gap-8">
      <Heading startIcon={SmartKeyIcon}>Single Sign-On (SSO)</Heading>

      <Box className="flex flex-col gap-6">
        {formInputs.map((input, index) => (
          <Fragment key={index}>
            <Input
              label={input.lable}
              placeholder={input.placeholder}
              type={input.type}
              defaultValue={""}
            />
          </Fragment>
        ))}
      </Box>
      <Box className="flex flex-col gap-6">
        <Link href="/landing/dasboard">
          <Button>Continue</Button>
        </Link>
        <Text className=" !text-lg !text-typograhy-1 text-center flex items-center gap-2">
          Want to use another account?
          <Link className="!text-lg" href="/auth/login">
            Login Here
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
