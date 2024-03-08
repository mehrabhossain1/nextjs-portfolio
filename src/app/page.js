import Image from "next/image";
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
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
        className="text-5xl font-semibold"
      >
        Hey, I&apos;m Mehrab Hossain
      </motion.h1>
      <motion.p
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-10 text-2xl max-w-[70ch] text-center"
      >
        A Frontend focused Mern Stack Developer building the Frontend of
        Websites and Web Applications that leads to the success of the overall
        product.
      </motion.p>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ delay: 2 }}
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
