import { HTMLProps } from "react";
import { Box, Button, DoughnutChart, Text } from "@/components";

interface UsageCardProps extends HTMLProps<HTMLDivElement> {
  amount?: string;
  amoun_all?: string;
  percent?: number;
  button?: string;
  color?: string;
  textColor?: string;
  chartColor?: string;
}

export const UsageCard: React.FC<UsageCardProps> = ({
  amount,
  amoun_all,
  percent,
  button,
  color,
  textColor,
  chartColor,
}) => {
  return (
    <Box className="!bg-neutrals-8 rounded-2xl shadow-2 py-8 px-8 2xl:px-20 gap-11 flex flex-row sm:flex-col lg:flex-row items-center justify-center w-full lg:!w-6/12 2xl:w-fit">
      <Box className="!w-[100px] lg:!w-[120px] !h-[116px]">
        <DoughnutChart color={chartColor} percent={percent} />
      </Box>

      <Box className="flex flex-col gap-4 !w-fit">
        <Button
          className={`${color} !rounded-[10px] !h-auto !min-h-9 !py-2 !px-3 !w-fit} !rounded-[10px] !h-9 !py-2 !px-3 !w-fit lg:whitespace-nowrap`}>
          {button}
        </Button>
        <Box className="!w-fit flex flex-col gap-2">
          <Box className="flex items-center whitespace-nowrap">
            <Text className=" !text-gray-2 !text-2xl !fonst-bold font-Inter">
              {amount}
            </Text>
            <Text className=" !text-gray-2 !text-xl !fonst-bold font-Inter">
              {`/ ${amoun_all}`}
            </Text>
          </Box>
          <Text
            className={`font-Inter-bold !text-2xl ${textColor}`}>{`${percent}%`}</Text>
        </Box>
      </Box>
    </Box>
  );
};
