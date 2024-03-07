import Image from "next/image";
import bg from "@/assets/herobg.jpg";

const HomePage = () => {
  return (
    <div
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
      <h1 className="text-5xl font-semibold">Hey, I&apos;m Mehrab Hossain</h1>
      <p className="mt-10 text-2xl max-w-[70ch] text-center">
        A Frontend focused Mern Stack Developer building the Frontend of
        Websites and Web Applications that leads to the success of the overall
        product.
      </p>
      <div className="flex mt-10 gap-2">
        <button className="btn bg-cyan-400 hover:bg-cyan-500 text-white">
          Download Resume
        </button>
        <button className="btn bg-cyan-400 hover:bg-cyan-500 text-white">
          Resume
        </button>
      </div>
    </div>
  );
};

export default HomePage;
