import { countMonth } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { PiCertificateFill } from "react-icons/pi";
import DownloadCv from "./DownloadCv";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-center items-center scroll-mt-20 max-md:mt-2"
      data-section
    >
      <div className="relative min-h-[500px] max-w-[1440px] min-[1440px]:mx-auto px-5 lg:px-40 flex flex-col justify-center items-center">
        <Image
          alt="about banner"
          src="/images/about-banner.jpg"
          width={300}
          height={500}
          className="object-cover self-start hidden sm:block absolute -z-[1] rounded-lg"
        />
        <Card className="px-5 py-2 sm:ml-[25%] bg-secondary">
          <CardHeader>
            <CardTitle>About me</CardTitle>
            <CardDescription>
              {" "}
              I am an automation engineer graduate who aspires to become a
              frontend developer.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-justify">
              I would like to pursue a career as a frontend developer due to its
              flexibility. It is a job that allows me to work from anywhere, and
              it offers a more even job market compared to my previous
              occupation. I am a logical and systematic thinker, which makes
              programming enjoyable for me. I work well in a team, and I would
              be thrilled if you could give me the opportunity to apply my
              self-taught knowledge of approximately {countMonth()} months and
              learn more about web development at a professional level through
              full-time work or projects. I have 4 months of work experience,
              developing 3 full-stack websites for the registration of a
              championship.
            </p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-1 mt-2">
            <DownloadCv />
            <Button variant={"outline"} size={"sm"} className="rounded-xl">
              <Link
                href="https://www.freecodecamp.org/certification/fcc9ff89252-49db-4f88-b62c-99edbc088d36/responsive-web-design"
                target="_blank"
              >
                <PiCertificateFill className="text-lg inline-block" />{" "}
                Responsive Web Design
              </Link>
            </Button>

            <Button variant={"outline"} size={"sm"} className="rounded-xl">
              <Link
                href="https://www.freecodecamp.org/certification/fcc9ff89252-49db-4f88-b62c-99edbc088d36/front-end-development-libraries"
                target="_blank"
              >
                <PiCertificateFill className="text-lg inline-block" /> Frontend
                Development Libraries
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
export default About;
