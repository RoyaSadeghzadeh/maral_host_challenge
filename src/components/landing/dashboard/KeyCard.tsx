import { Box, Button, Heading, Text } from "@/components";
import useCopyToClipboard from "@/hooks/useCopyToClipBoard";
import React from "react";

export const KeyCard = () => {
  const { copied, copyToClipboard } = useCopyToClipboard();

  const key =
    "dm1lc3M6Ly9leUoySWpvaU1pSXNJbkJ6SWpvaVhIVXdOakkzWEhVd05qTXpYSFV3TmpReFhIVXdOalEyWEhVd05qSm1JREk0SUh3Z1hIVXdOak14WEhVd05qUTRYSFV3TmpNeUlGeDFNRFkwTlZ4MU1EWXlOMXgxTURZME5seDFNRFl5Wmx4MU1EWTBOem9nTXpJaUxDSmhaR1FpT2lKY2RUQTJOREpjZFR";

  return (
    <Box className='flex flex-col justify-between bg-[url("../assets/images/circle.png")] sm:bg-bottom-right-2 xl:bg-bottom-right-1 bg-no-repeat bg-primary-3 w-full xl:!w-3/12 rounded-3xl py-6 px-7 order-2 xl:order-1'>
      <Box>
        <Box className="flex items-center justify-between">
          <Heading className="!text-lg !text-white !m-0">API KEY</Heading>
          <span className="block w-2 h-2 rounded-full bg-white" />
        </Box>
        <Text className="!text-white !text-sm break-words pt-6 pb-3">
          {key}
        </Text>
        <Text className="!text-white !text-sm font-bold">
          Generated 03.08.2023
        </Text>
      </Box>
      <Button
        onClick={() => copyToClipboard(key)}
        className="bg-primary-6 !h-9 !rounded-full mt-6">
        Copy to clipboard
      </Button>
    </Box>
  );
};
