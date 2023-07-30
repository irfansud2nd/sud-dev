import Image from "next/image";
import Link from "next/link";
import { IoIosDocument } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-center items-center"
      data-section
    >
      <div className="relative min-h-[500px] max-w-2xl flex flex-col justify-center items-center">
        <Image
          alt="about banner"
          src="/images/about-banner.jpg"
          width={300}
          height={500}
          className="object-cover absolute -z-[1] top-1/2 -translate-y-1/2 -left-[160px]"
        />
        <div className=" bg-gray-200 px-5 py-2">
          <h1 className="font-semibold text-3xl">About Me</h1>
          <h2 className="font-semobold text-xl text-justify">
            I am a graduated automation engineer who wants to be a frontend
            developer
          </h2>
          <p className="text-justify">
            I want to be a frontend developer, because of its flexibility. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Asperiores vel
            sequi sed quae! Saepe, velit alias laudantium eveniet asperiores
            magni, Check my CV and certificates down below.
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            <Link
              href="/"
              target="_blank"
              className="font-bold whitespace-nowrap items-center px-2 pt-1 pb-0.5 bg-gray-50 rounded-full"
            >
              <IoIosDocument className="text-lg inline-block mb-1" /> CV
            </Link>
            <Link
              href="/"
              target="_blank"
              className="font-bold whitespace-nowrap items-center px-2 pt-1 pb-0.5 bg-gray-50 rounded-full"
            >
              <PiCertificateFill className="text-lg inline-block" /> Responsive
              Web Design
            </Link>
            <Link
              href="/"
              target="_blank"
              className="font-bold whitespace-nowrap items-center px-2 pt-1 pb-0.5 bg-gray-50 rounded-full"
            >
              <PiCertificateFill className="text-lg inline-block" /> Javasript
              Development Libraries
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
