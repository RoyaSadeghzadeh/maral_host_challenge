"use client";
import { useEffect } from "react";
import { SmartKeyIcon } from "@/assets";
import { Box, Button, HeroSection, Login } from "@/components";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/login");
  }, []);

  return (
    <main className="bg-background-1">
      <section className="flex items-center justify-center min-h-screen">
        redirecting to login oage page...
      </section>
    </main>
  );
}
