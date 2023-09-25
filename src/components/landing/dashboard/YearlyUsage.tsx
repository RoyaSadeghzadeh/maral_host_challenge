import React from "react";
import { UsageCard } from "./UsageCard";
import { Box, Button, Text } from "@/components";

export const YearlyUsage = () => {
  return (
    <Box className="flex flex-col xl:flex-row gap-8">
      <Box className="flex flex-col sm:flex-row gap-8 w-full xl:w-fit">
        <UsageCard
          amount={"5,300"}
          amoun_all={"10,000"}
          percent={53}
          button="Searches Used"
          color="!bg-primary-3"
          textColor="!text-primary-3"
          chartColor="#0060FE"
        />
        <UsageCard
          amount={"7,400"}
          amoun_all={"10,000"}
          percent={74}
          button="Domain Searches Used"
          color="!bg-red-1"
          textColor="!text-red-1"
          chartColor="#EF466F"
        />
      </Box>
      <Box className="!p-8 !bg-gray-3 rounded-2xl border border-gray-1 flex flex-col gap-11 justify-between w-full xl:!w-4/12">
        <Button className="!bg-primary-5 py-2 px-3 w-full h-auto">
          Days Left
        </Button>
        <Box className="flex items-center justify-center gap-1 whitespace-nowrap">
          <Text className=" !text-gray-2 !text-2xl !fonst-bold font-Inter">
            {`234 \n`}
          </Text>
          <Text className=" !text-gray-2 !text-xl !fonst-bold font-Inter">
            {` / 365`}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
