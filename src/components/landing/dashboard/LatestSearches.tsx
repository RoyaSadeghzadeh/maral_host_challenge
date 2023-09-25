import { ArrowRightIcon } from "@/assets";
import { Box, Button, Heading, Table } from "@/components";

export const LatestSearches = () => {
  //for render result buttons
  const renderResultButtons = (background: string) => {
    return (
      <Box className="flex items-center justify-between gap-8">
        <span>1392 Results</span>
        <Box className="flex items-center justify-end gap-6 !w-fit">
          <Button
            endIcon={ArrowRightIcon}
            className={`!h-auto py-2 px-6 ${background} !rounded-full !w-fit !text-sm !text-dark-1 !font-bold !gap-3`}>
            Results
          </Button>
          <Button
            endIcon={ArrowRightIcon}
            className={`!h-auto py-2 px-6 ${background} !rounded-full !w-fit !text-sm !text-dark-1 !font-bold !gap-3`}>
            View report
          </Button>
        </Box>
      </Box>
    );
  };

  const columns = [
    { header: "QUERY", accessor: "query" },
    { header: "TYPE", accessor: "type" },
    { header: "RESULTS", accessor: "results" },
  ];

  //start of searches table data
  const data = [
    {
      query: (
        <Box className="py-1 px-4 bg-white rounded-full !w-fit !text-sm !text-dark-1 !font-bold">
          nginxWebUI
        </Box>
      ),
      type: "Certificate",
      results: renderResultButtons("!bg-white"),
    },
    {
      query: (
        <Box className="py-1 px-4 bg-dark-5 rounded-full !w-fit !text-sm !text-dark-1 !font-bold">
          nginx-proxy-manager
        </Box>
      ),
      type: "Image",
      results: renderResultButtons("!bg-dark-5"),
    },
    {
      query: (
        <Box className="py-1 px-4 bg-white rounded-full !w-fit !text-sm !text-dark-1 !font-bold">
          neusoft-senginx
        </Box>
      ),
      type: "Asset",
      results: renderResultButtons("!bg-white"),
    },
    {
      query: (
        <Box className="py-1 px-4 bg-dark-5  rounded-full !w-fit !text-sm !text-dark-1 !font-bold">
          Addon-nginx-proxy-manager
        </Box>
      ),
      type: "Certificate",
      results: renderResultButtons("!bg-dark-5"),
    },
  ];
  //end of searches table data

  return (
    <Box className="!bg-neutrals-8 rounded-2xl shadow-2 p-8 flex flex-col gap-5 w-full">
      <Heading className={`text-2xl cursor-pointer !text-dark-1 font-bold`}>
        Latest Searches
      </Heading>
      <Box className=" overflow-auto">
        <Table columns={columns} data={data} />
      </Box>
    </Box>
  );
};
