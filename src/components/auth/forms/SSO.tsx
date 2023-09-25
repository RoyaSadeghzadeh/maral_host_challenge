import { SmartKeyIcon } from "@/assets";
import { Box, Button, Heading, Input, Link, Text } from "@/components";
import { Fragment } from "react";
import { ROOT_PATHS } from "@/utils/path";

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
        <Link href={ROOT_PATHS.landing.dashboard}>
          <Button>Continue</Button>
        </Link>
        <Text className=" !text-lg !text-typograhy-1 text-center flex items-center gap-2">
          Want to use another account?
          <Link className="!text-lg" href={ROOT_PATHS.auth.login}>
            Login Here
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
