import Image from "next/image";
import bg from "@/assets/herobg.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* <Image src={bg} alt="hero bg image" /> */}
      <h1 className="text-5xl">Hey, I&apos;m Mehrab Hossain</h1>
      <p>
        A Frontend focused Mern Stack Developer building the Frontend of
        Websites and Web Applications that leads to the success of the overall
        product.
      </p>
      <div className="flex">
        <button className="btn btn-info">Download Resume</button>
        <button className="btn btn-info">Resume</button>
      </div>
    </div>
  );
};

export default HomePage;
