//assets
import {
  ArrowIcon,
  BillingIcon,
  DashboardIcon,
  ProfileIcon,
  SettingsIcon,
  StatisticsIcon,
} from "@/assets";

//components
import { Box, Link, Text } from "@/components";

//nextjs
import { useParams } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  // for get type component parameter from url
  const params = useParams();
  const activeTabUrl = params.tab;

  const NAVBAR_ITEMS = [
    {
      title: "Dashboard",
      icon: DashboardIcon,
      link: "/dashboard",
    },
    {
      title: "Billing",
      icon: BillingIcon,
      link: "/billing",
    },
    {
      title: "Profile",
      icon: ProfileIcon,
      link: "/profile",
    },
    {
      title: "Settings",
      icon: SettingsIcon,
      link: "/settings",
    },
    {
      title: "Statistics",
      icon: StatisticsIcon,
      link: "/statistics",
    },
  ];

  return (
    <nav>
      <ul className="lg:items-center gap-12 flex flex-col lg:flex-row w-full lg:!w-fit">
        {NAVBAR_ITEMS.map((item, index) => (
          <li
            className="flex flex-col items-center gap-2 cursor-pointer relative pb-7 lg:pb-0 border-b border-gray-1 lg:border-none"
            key={index}>
            <Box className="flex items-center gap-2 cursor-pointer">
              <Image alt="" width={19} height={19} src={item.icon} />
              <Link
                href={`/landing/${item.link}`}
                className={`!text-sm font-thin ${
                  item.link.includes(activeTabUrl.toString())
                    ? "!text-black !font-bold"
                    : "!text-dark-2"
                }`}>
                {item.title}
              </Link>
            </Box>
            {item.link.includes(activeTabUrl.toString()) && (
              <hr className=" w-full h-1 bg-primary-3 absolute bottom-0 lg:-bottom-7" />
            )}
          </li>
        ))}
        <li className="flex items-center gap-2 cursor-pointer">
          <Text className="!text-[16px] !text-dark-2">More</Text>
          <Image alt="" width={10} height={10} src={ArrowIcon} />
        </li>
      </ul>
    </nav>
  );
};
