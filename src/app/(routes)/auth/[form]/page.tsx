"use client";
//assets
import { SmartKeyIcon } from "@/assets";

//components
import {
  Box,
  Button,
  HeroSection,
  Login,
  Signup,
  SSO,
  Verification,
} from "@/components";
import Link from "next/link";

//nextjs
import { useParams } from "next/navigation";

export default function Home() {
  // for get form component parameter from url
  const params = useParams();
  const formType = params.form;

  const AUTH_FORMS = [
    {
      route: "/login",
      component: <Login />,
    },
    {
      route: "/signup",
      component: <Signup />,
    },
    {
      route: "/sso",
      component: <SSO />,
    },
    {
      route: "/verification",
      component: <Verification />,
    },
  ];

  return (
    <main className="bg-background-1">
      <section className="flex gap-9 2xl:gap-[135px] py-9 pl-10 pr-10 2xl:pr-[135px] min-h-screen">
        <Box className="hidden lg:block !w-2/4 bg-neutrals-8 rounded-[48px]">
          <HeroSection />
        </Box>
        <Box className="w-full md:w-8/12 lg:!w-2/4 h-full flex flex-col justify-center items-center gap-8 mx-auto min-h-screen">
          <Box className="rounded-3xl px-24 py-20 bg-neutrals-8 shadow-1">
            {
              // rendering proper form component based on url params
              formType && (
                <>
                  {AUTH_FORMS.map((form, index) => (
                    <>
                      {form.route.includes(formType.toString()) &&
                        form.component}
                    </>
                  ))}
                </>
              )
            }
          </Box>
          {
            // for show just when login form is active
            formType && formType.includes("login") && (
              <Link className="block w-full" href="/auth/sso">
                <Button
                  className="!border-[2px] !border-neutrals-6 !bg-transparent !text-typograhy-1"
                  startIcon={SmartKeyIcon}>
                  Single Sign-On (SSO)
                </Button>
              </Link>
            )
          }
        </Box>
      </section>
    </main>
  );
}
