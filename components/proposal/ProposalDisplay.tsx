import { workExperienceLength } from "@/utils/constants";
import { Proposal } from "./Proposal";

const ProposalDisplay = ({ proposal }: { proposal: Proposal }) => {
  const { position, designGiven, projectTitle, questions, interestingThings } =
    proposal;
  return (
    <div className="p-2 border-2 w-full">
      <h1 className="text-xl font-semibold border-b">Preview</h1>
      <p>Hi,</p>
      <p>
        My name is Irfan, based in Bandung, Indonesia. I am excited to submit my
        application for the <b>{position}</b> position. With over{" "}
        <b>{workExperienceLength}</b> months of experience as a full-stack
        developer, specializing in technologies such as Next.js, React, Tailwind
        CSS, Firebase, and Redux, I am confident in my ability to contribute
        effectively to your project
      </p>
      <p>
        During my tenure as a freelancer, I have successfully completed numerous
        projects, including the development of three full-stack websites for
        registering in martial arts championships. These projects have honed my
        skills in creating dynamic and user-friendly web applications, while
        also instilling in me the importance of meeting deadlines and exceeding
        client expectations
      </p>
      <p>
        I have read your requirement{" "}
        {designGiven && <b>, and see the design guideline</b>} for{" "}
        <b>{projectTitle}</b>.
        {questions.active.length ? (
          <span>
            {" "}
            To more understand the requirement of the project I have some
            questions for you
          </span>
        ) : null}
      </p>
      <ol className="font-bold">
        {questions.active.map((question, i) => (
          <li key={question}>
            {i + 1}. {question}
          </li>
        ))}
      </ol>
      <p>
        {questions.active.length ? (
          <span>
            {" "}
            I would greatly appreciate your response to my questions above.{" "}
          </span>
        ) : null}
        {interestingThings && (
          <span>
            I am particularly drawn to this opportunity because{" "}
            <b>{interestingThings}</b>.
          </span>
        )}{" "}
        I am eager to bring my expertise to your team and contribute to the
        success of your project.
      </p>
      <p>
        Thank you for considering my application. I am looking forward to the
        possibility of working together and am available for an interview at
        your earliest convenience.
      </p>
      <p>
        Warm regards,
        <br />
        Irfan Sudarsana
      </p>
    </div>
  );
};
export default ProposalDisplay;
