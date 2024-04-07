export type TechNames =
  | "html"
  | "css"
  | "js"
  | "react"
  | "next"
  | "tailwind"
  | "firebase"
  | "api"
  | "all";

export type ProjectCardProps = {
  id: string;
  title: string;
  desc: string | JSX.Element;
  techStack: TechNames[];
  visitUrl: string;
  repoUrl: string;
  commercial?: boolean;
};
