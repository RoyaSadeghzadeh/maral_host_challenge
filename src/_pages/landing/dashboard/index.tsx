import React from "react";
import {
  Box,
  DailyUsageCard,
  Filters,
  KeyCard,
  LatestSearches,
  YearlyUsage,
} from "@/components";

export const Dashboard = () => {
  return (
    <Box className="flex flex-col gap-8">
      <YearlyUsage />
      <DailyUsageCard />
      <LatestSearches />
      <Box className="flex flex-col xl:flex-row gap-8">
        <KeyCard />
        <Filters />
      </Box>
    </Box>
  );
};
