import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import { FaLocationDot } from "react-icons/fa6";
import TechStack from "./TechStack";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full max-w-[1440px] min-[1440px]:mx-auto min-h-screen flex justify-center text-center md:text-start md:justify-between gap-3 md:gap-10 items-center px-5 lg:px-40"
      data-section
    >
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="font-extrabold text-5xl">Frontend Developer</h1>
        <Image
          className="md:hidden object-cover object-top rounded-full w-52 h-52 mx-auto"
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          quality={100}
        />
        <p>
          Hi, I am Irfan sudarsana. A self-taught Frontend Developer.
          <br className="mb-1" />
          <span className="inline-block mr-2">
            <FaLocationDot />
          </span>
          Bandung, West Java, Indonesia
        </p>
        <div className="flex justify-center md:justify-start gap-3 text-3xl">
          <Link href="https://www.linkedin.com/in/irfansud" target="_blank">
            <AiFillLinkedin />
          </Link>
          <Link href="https://github.com/irfansud2nd" target="_blank">
            <AiFillGithub />
          </Link>
        </div>
        <TechStack />
      </div>
      <Image
        className="hidden md:block object-cover object-top rounded-full w-[300px] h-[300px] md:w-[230px] md:h-[230px] xl:w-[300px] xl:h-[300px]"
        src="/images/profile-sud.jpg"
        alt="Profile Picture"
        width={300}
        height={300}
        quality={100}
      />
    </section>
  );
};
export default Home;
