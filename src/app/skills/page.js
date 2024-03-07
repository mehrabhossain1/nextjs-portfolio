import Image from "next/image";
import bg from "@/assets/herobg.jpg";

const Skills = () => {
  return (
    <Image
      alt="Mountains"
      src={bg}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
  );
};

export default Skills;
