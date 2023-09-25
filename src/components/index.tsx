//base components
import { CustomButton as Button } from "./base/Button";
import { CustomBox as Box } from "./base/Box";
import { CustomInput as Input } from "./base/Input";
import { CustomHeading as Heading } from "./base/Heading";
import { CustomText as Text } from "./base/Text";
import { CustomLink as Link } from "./base/Link";
import { CustomCheckbox as Checkbox } from "./base/Checkbox";
import { CustomAvatar as Avatar } from "./base/Avatar";
import { CustomTable as Table } from "./base/Table";

//charts
import { DoughnutChart } from "./base/charts/Doughnut";
import { MultiChart } from "./base/charts/MultiChart";

//auth page components
import { AuthHeroSection as HeroSection } from "./auth/Hero";
import { LoginForm as Login } from "./auth/forms/Login";
import { SignupForm as Signup } from "./auth/forms/Signup";
import { SSOForm as SSO } from "./auth/forms/SSO";
import { VerificationForm as Verification } from "./auth/forms/Verification";

//dashboard page components
import { UsageCard } from "./landing/dashboard/UsageCard";
import { DailyUsageCard } from "./landing/dashboard/DailyUsageCard";
import { LatestSearches } from "./landing/dashboard/LatestSearches";
import { Filters } from "./landing/dashboard/Filters";
import { KeyCard } from "./landing/dashboard/KeyCard";
import { YearlyUsage } from "./landing/dashboard/YearlyUsage";

//app layouts
import { Layout } from "./layouts/dashboard/header";
import { Navbar } from "./layouts/dashboard/header/Navber";

export {
  Button,
  Box,
  HeroSection,
  Input,
  Heading,
  Text,
  Link,
  Checkbox,
  Avatar,
  DailyUsageCard,
  DoughnutChart,
  UsageCard,
  Table,
  Login,
  Signup,
  SSO,
  Verification,
  Layout,
  Navbar,
  LatestSearches,
  MultiChart,
  Filters,
  KeyCard,
  YearlyUsage,
};
