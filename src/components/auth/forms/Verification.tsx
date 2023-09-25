/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Heading,
  Input,
  Link,
  Text,
} from "@/components";
import { Fragment } from "react";

export const VerificationForm = () => {
  return (
    <Box className="flex flex-col gap-8">
      <Box>
        <Heading>2-step Verification</Heading>
        <Text className="!text-typograhy-3 !text-lg">
          We sent a verification code to your email. Enter the code from the
          email in the field below.
        </Text>
      </Box>

      <Box className="flex gap-8">
        {[1, 2, 3, 4].map((input, index) => (
          <Fragment key={index}>
            <Input
              containerClassName="aspect-square flex-1 flex items-center justify-center !bg-transparent"
              inputBoxClassName="!h-full !text-center [&>input]:p-0 group !bg-transparent"
              inputClassName="text-center !font-bold !text-3xl !text-typograhy-1 !bg-transparent"
            />
          </Fragment>
        ))}
      </Box>

      <Box className="flex flex-col gap-6">
        <Button>Verify my account</Button>
        <Text className=" !text-lg !text-typograhy-3 text-center flex items-center gap-2">
          Haven't received it?
          <Link className=" !text-lg" href="">
            Resend a new code
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
