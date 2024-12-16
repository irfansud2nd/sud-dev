import Link from "next/link";

export type TechNames =
  | "html"
  | "css"
  | "js"
  | "react"
  | "next"
  | "tailwind"
  | "shadcn"
  | "firebase"
  | "api"
  | "supabase"
  | "all";

export type ProjectCardProps = {
  id: string;
  title: string;
  desc: string | JSX.Element;
  techStack: TechNames[];
  visitUrl: string;
  repoUrl?: string;
  commercial?: boolean;
};

export const workExperienceLength = "1 Year";

export const projectsCount = 4;

export const projects: ProjectCardProps[] = [
  {
    id: "ipsi-bandung",
    title: "IPSI Kota Bandung",
    desc: (
      <div>
        <span>
          The business website for{" "}
          <b>Ikatan Pencak Silat Indonesia (IPSI) Kota Bandung</b>. This will
          facilitate championship registrations, manage the attendance of
          athletes trained by IPSI Kota Bandung, and manage news and events to
          be shared.
        </span>
        <span>
          I think this website is the best from all projects that i have done.
          So far,{" "}
          <Link href={"https://ipsikotabandung.com"} className="text-blue-500">
            ipsikotabandung.com
          </Link>{" "}
          has successfully facilitated 1 championship with a total of 1,899
          athletes, 402 officials, and 212 contingents.
        </span>
      </div>
    ),
    techStack: ["next", "supabase", "firebase", "shadcn", "tailwind"],
    visitUrl: "https://ipsikotabandung.com",
    repoUrl: "https://github.com/irfansud2nd/ipsi-kota-bandung",
    commercial: true,
  },
  {
    id: "ladwitra-2024",
    title: "La Dwitra 2024",
    desc: (
      <div>
        <span>
          The website is designed to facilitate participant registration for
          silat championsip and jaipong competition of La Dwitra 2024, an event
          organized by{" "}
          <Link
            href={"https://smalabsupicibiru.sch.id/"}
            className="text-blue-500"
            target="_blank"
          >
            SMA Labschool UPI Cibiru.
          </Link>{" "}
        </span>
        <br />
        <span>51 Users</span>
        <br />
        <span>3 Admins</span>
        <br />
        <span>Accommodating 247 data consisting of:</span>
        <ul className="list-inside list-disc">
          <li>35 Contingents</li>
          <li>125 Athletes</li>
          <li>30 Officials</li>
          <li>16 Dance Studios</li>
          <li>36 Dancers</li>
          <li>5 Choreographers</li>
        </ul>
        <span>
          I think this website is way more better than my last 2 similiar
          projects, i learned a lot of new things in the depelopment process. It
          was created in about two week, but I still maintain this website until
          the event is over.
        </span>
      </div>
    ),
    techStack: ["next", "firebase", "shadcn", "tailwind", "api"],
    visitUrl: "https://ladwitra.vercel.app/",
    repoUrl: "https://github.com/irfansud2nd/ladwitra-2024",
    commercial: true,
  },
  {
    id: "asbd-2023",
    title: "Kejurnas ASBD 2023",
    desc: (
      <div>
        <span>
          The website is designed to facilitate participant registration for the
          Kejuaraan Nasional{" "}
          <Link
            href={"https://silatalazhar.com/"}
            className="text-blue-500"
            target="_blank"
          >
            ASBD
          </Link>{" "}
          2023.
        </span>
        <br />
        <span>495 Users</span>
        <br />
        <span>12 Admins</span>
        <br />
        <span>Accommodating 2312 data consisting of:</span>
        <ul className="list-inside list-disc">
          <li>157 Contingents</li>
          <li>1772 Athletes</li>
          <li>433 Officials</li>
        </ul>
        <span>
          This website was only given one week to be created, but its better
          than the PORTUE one.
        </span>
      </div>
    ),
    techStack: ["next", "firebase", "tailwind"],
    visitUrl: "https://kejurnas-asbd-2023.vercel.app/",
    repoUrl: "https://github.com/irfansud2nd/kejurnas-asbd-2023",
    commercial: true,
  },
  {
    id: "portue-2023",
    title: "PORTUE 2023",
    desc: (
      <div>
        <span>
          PORTUE 2023 is a website designed to facilitate participant
          registration for the{" "}
          <Link
            href={"https://portue.koni-kotabandung.or.id/"}
            className="text-blue-500"
            target="_blank"
          >
            PORTUE Silat Bandung Championship 2023.{" "}
          </Link>
        </span>
        <br />
        <span>180 Users</span>
        <br />
        <span>5 Admins</span>
        <br />
        <span>Accommodating 1776 data consisting of:</span>
        <ul className="list-inside list-disc">
          <li>101 Contingents</li>
          <li>1511 Athletes</li>
          <li>164 Officials</li>
        </ul>
        <span>
          I acknowledge that this website is far from perfect, due to the very
          limited development time of just one week.
        </span>
      </div>
    ),

    techStack: ["next", "firebase", "tailwind"],
    visitUrl: "https://portue-silat-championship.vercel.app",
    repoUrl: "https://github.com/irfansud2nd/portue-championship",
    commercial: true,
  },
  {
    id: "custom-kit",
    title: "Custom Kit",
    desc: (
      <span>
        Custom Kit is an innovation that provides a retro or customized
        appearance for your motorcycle without the need to modify its chassis.
        This way, you can easily restore your motorcycle to its original form.
        The design is inspired by{" "}
        <Link
          href="https://eat-curious.com"
          className="text-blue-500"
          target="_blank"
        >
          eat-curious.com
        </Link>
        , and the image assets are from{" "}
        <Link
          href="https://instagram.com/custom.kit"
          target="_blank"
          className="text-blue-500"
        >
          Custom Kit by Katros
        </Link>
        .
      </span>
    ),
    techStack: ["react", "tailwind"],
    visitUrl: "https://irfansud2nd.github.io/custom-kit",
    repoUrl: "https://github.com/irfansud2nd/custom-kit",
  },
  {
    id: "sud-gym",
    title: "Sud Gym",
    desc: (
      <span>
        Sudgym is a website that provides information about body exercises based
        on muscle targets or equipment. I followed a tutorial from{" "}
        <Link
          href="https://www.youtube.com/@javascriptmastery"
          target="_blank"
          className="text-blue-500"
        >
          Javascript Mastery
        </Link>
        , but I used a different tech stack, which is Typescript and Tailwind.
      </span>
    ),
    techStack: ["react", "tailwind", "api"],
    visitUrl: "https://sudgym.netlify.app/",
    repoUrl: "https://github.com/irfansud2nd/sudgym",
  },
  // {
  // id:'sud-garage',
  //   title: "Sud Garage",
  //   desc: "Sudgarage is a simple landing page with the most basic tech stack that showcases the services offered.",
  //   techStack: ["html", "css", "js"],
  //   visitUrl: "https://irfansud2nd.github.io/sud-garage",
  //   repoUrl: "https://github.com/irfansud2nd/sud-garage",
  // },
  // {
  // id:'4-numbers',
  //   title: "Guess 4 numbers",
  //   desc: "Guess 4 Numbers is a game I created when I first started learning JavaScript. It may not be a flashy project, but it holds sentimental value for me , it is also the first page that I have deployed. The essence of the game is to guess 4 numbers, and the clues provided include correct numbers and their positions.",
  //   techStack: ["html", "css", "js"],
  //   visitUrl: "https://irfansud2nd.github.io/guess-the-4-numbers/",
  //   repoUrl: "https://github.com/irfansud2nd/guess-the-4-numbers",
  // },
];
