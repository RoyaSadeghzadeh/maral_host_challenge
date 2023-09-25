import { ArrowRightIcon } from "@/assets";
import { Box, Button, Heading, Table, Text } from "@/components";

export const Filters = () => {
  const columns = [
    { header: "FILTERS’S NAME", accessor: "name" },
    { header: "DESCRIPTION", accessor: "description" },
    { header: "EXAMPLE", accessor: "example" },
  ];

  //start of filters table data
  const data = [
    {
      name: "city",
      description: "Name of the city",
      example: "Devices in San Diego",
    },
    {
      name: "country",
      description: "2-letter Country code",
      example: "Open ports in the United States",
    },
    {
      name: "http.title",
      description: "Title of the website",
      example: "Hacked Websites",
    },
    {
      name: "net",
      description: "Network range or IP in CIDR notation",
      example: "Services in the range of 8.8.0.0 to 8.8.255.255",
    },
  ];
  //end of filters table data

  return (
    <Box className="!bg-neutrals-8 rounded-2xl shadow-2 p-8 flex flex-col gap-8 order-1 xl:order-2 w-full xl:w-9/12 min-w-[200px]">
      <Box className="flex flex-col gap-3">
        <Box className="flex items-center gap-1">
          <Heading className={`!text-2xl cursor-pointer !text-dark-1 !m-0`}>
            Filters
          </Heading>
          <Text className={`!text-2xl cursor-pointer !text-dark-1 p-0`}>
            Cheat Sheet
          </Text>
        </Box>
        <Text className="!text-dark-3 !text-sm">
          Here are a few of the most commonly-used search filters to get
          started.
        </Text>
      </Box>
      <Box className="overflow-auto">
        <Table columns={columns} data={data} />
      </Box>
    </Box>
  );
};
