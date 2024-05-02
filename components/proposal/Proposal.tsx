"use client";

import { workExperienceLength } from "@/utils/constants";
import { useState } from "react";
import ProposalForm from "./ProposalForm";
import ProposalDisplay from "./ProposalDisplay";
import Links from "./Links";

export type Proposal = {
  position: string;
  projectTitle: string;
  designGiven: boolean;
  questions: {
    active: string[];
    inactive: string[];
  };
  interestingThings: string;
};

const Proposal = () => {
  const defaultQuestions = [
    "Who will be handling the deployment process? If me, is there any additional payment to rent the website domain?",
    "Do you have specific design for the mobile view?",
    "What kind of back-end do you use?",
    "Is it allowed to build the website using front-end framework? If yes do you have specific framework you preferred?",
    "How many months is the minimum work period you prefer?",
    "Is it allowed to use CSS or UI Framework? if yes, what framework you preferred?",
  ];

  const initialValue: Proposal = {
    position: "Frontend Developer",
    projectTitle: "the job",
    designGiven: false,
    questions: {
      active: [],
      inactive: defaultQuestions,
    },
    interestingThings: "",
  };

  const [proposal, setProposal] = useState(initialValue);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <div className="md:col-span-1">
        <ProposalForm proposal={proposal} setProposal={setProposal} />
      </div>
      <div className="md:col-span-2">
        <ProposalDisplay proposal={proposal} />
        <Links />
      </div>
    </div>
  );
};
export default Proposal;
