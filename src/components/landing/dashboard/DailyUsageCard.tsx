import { HTMLProps } from "react";
import { Box, MultiChart, Text } from "@/components";
import useTabs from "@/hooks/useTabs";

interface UsageCardProps extends HTMLProps<HTMLDivElement> {
  amount?: string;
  amoun_all?: string;
  percent?: number;
  button?: string;
  color?: string;
  textColor?: string;
  chartColor?: string;
}

export const DailyUsageCard: React.FC<UsageCardProps> = ({
  amount,
  amoun_all,
  percent,
  button,
  color,
  textColor,
  chartColor,
}) => {
  //usage tab options
  const initialTabs = [
    {
      id: "1",
      label: "Daily Usage",
      content: <MultiChart />,
    },
    {
      id: "2",
      label: "Monthly Usage",
      content: <MultiChart />,
    },
  ];

  const { tabs, activeTab, activateTab } = useTabs(initialTabs, initialTabs[0]);

  return (
    <Box className="!bg-neutrals-8 rounded-2xl shadow-2 p-8 w-full flex flex-col gap-8">
      <Box className="flex items-center gap-5">
        {tabs.map((tab, index) => (
          <Text
            onClick={() => activateTab(tab)}
            key={index}
            className={`text-2xl cursor-pointer ${
              tab.id === activeTab.id
                ? "!text-dark-1 font-bold"
                : "!text-gray-4"
            }`}>
            {tab.label}
          </Text>
        ))}
      </Box>
      <Box className=" h-72 w-full">{activeTab.content}</Box>
    </Box>
  );
};
