import Image from "next/image";
import Link from "next/link";
import { IoIosDocument } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-center items-center scroll-mt-20"
      data-section
    >
      <div className="relative min-h-[500px] max-w-[1440px] min-[1440px]:mx-auto px-5 lg:px-40 flex flex-col justify-center items-center">
        <Image
          alt="about banner"
          src="/images/about-banner.jpg"
          width={300}
          height={500}
          className="object-cover self-start hidden sm:block absolute -z-[1]"
        />
        <div className=" bg-gray-200 px-5 py-2 sm:ml-[25%]">
          <h1 className="font-semibold text-3xl">About Me</h1>
          <h2 className="font-semobold text-xl">
            I am an automation engineer graduate who aspires to become a
            frontend developer.
          </h2>
          <p className="text-justify">
            I would like to pursue a career as a frontend developer due to its
            flexibility. It is a job that allows me to work from anywhere, and
            it offers a more even job market compared to my previous occupation.
            I am a logical and systematic thinker, which makes programming
            enjoyable for me. I work well in a team, and I would be thrilled if
            you could give me the opportunity to apply my self-taught knowledge
            of approximately 5 months and learn more about web development at a
            professional level through full-time work or projects., Check my CV
            and certificates down below.
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            <Link
              href="https://drive.google.com/drive/folders/1SDu6Cju5EmaDH2-3PVTREhr3aPhDUDOT?usp=sharing"
              target="_blank"
              className="font-bold whitespace-nowrap items-center px-2 pt-1 pb-0.5 bg-gray-50 rounded-full"
            >
              <IoIosDocument className="text-lg inline-block mb-1" /> CV
            </Link>
            <Link
              href="https://www.freecodecamp.org/certification/fcc9ff89252-49db-4f88-b62c-99edbc088d36/responsive-web-design"
              target="_blank"
              className="font-bold whitespace-nowrap items-center px-2 pt-1 pb-0.5 bg-gray-50 rounded-full"
            >
              <PiCertificateFill className="text-lg inline-block" /> Responsive
              Web Design
            </Link>
            <Link
              href="https://www.freecodecamp.org/certification/fcc9ff89252-49db-4f88-b62c-99edbc088d36/front-end-development-libraries"
              target="_blank"
              className="font-bold whitespace-nowrap items-center px-2 pt-1 pb-0.5 bg-gray-50 rounded-full"
            >
              <PiCertificateFill className="text-lg inline-block" /> Frontend
              Development Libraries
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
