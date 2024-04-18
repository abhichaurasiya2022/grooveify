import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "@/components/Homepage/Homepage";
import HomeLayout from "@/components/HomeLayout/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex w-full h-dvh bg-slate-200 dark:bg-gray-950">
      <HomeLayout />
    </main>
  );
}
