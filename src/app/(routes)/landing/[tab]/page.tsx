"use client";
import { Dashboard } from "@/_pages";
import { Layout } from "@/components";


export default function Landing() {
  return (
    <main className="bg-background-1 min-h-screen">
      <Layout>
        <Dashboard />
      </Layout>
    </main>
  );
}
