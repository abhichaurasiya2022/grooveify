import { motion } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";
import HomeLayout from "@/components/HomeLayout/HomeLayout";
import Loader from "@/components/Loader/Loader";
import { Suspense } from "react";
import { useMediaQueryContext } from "@/utils/MediaQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { areQueriesResolved } = useMediaQueryContext();

  return (
    <main className="flex justify-center items-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: areQueriesResolved ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {areQueriesResolved ? (
          <HomeLayout />
        ) : (
          <Loader />
        )}
      </motion.div>

    </main>
  );
}
