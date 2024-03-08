"use client";

import bg from "@/assets/herobg.jpg";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-semibold"
      >
        Hey, I&apos;m Mehrab Hossain
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 text-2xl max-w-[70ch] text-center"
      >
        A Frontend focused Mern Stack Developer building the Frontend of
        Websites and Web Applications that leads to the success of the overall
        product.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex mt-10 gap-2"
      >
        <button className="btn bg-cyan-400 hover:bg-cyan-500 text-white">
          Download Resume
        </button>
        <button className="btn bg-cyan-400 hover:bg-cyan-500 text-white">
          Resume
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
