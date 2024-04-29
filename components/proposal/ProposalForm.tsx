import { useState } from "react";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Proposal } from "./Proposal";
import { Button } from "../ui/button";

type Props = {
  proposal: Proposal;
  setProposal: React.Dispatch<React.SetStateAction<Proposal>>;
};

const ProposalForm = ({ proposal, setProposal }: Props) => {
  const [newQuestion, setNewQuestion] = useState("");

  const manageQuestions = (
    question: string,
    questions: {
      active: string[];
      inactive: string[];
    },
    deactive: boolean = false
  ) => {
    let result = questions;
    if (deactive && !result.inactive.includes(question)) {
      result.active = result.active.filter((item) => item !== question);
      result.inactive.push(question);
    }
    if (!deactive && !result.active.includes(question)) {
      result.inactive = result.inactive.filter((item) => item !== question);
      result.active.push(question);
    }
    console.log(result);
    return result;
  };

  return (
    <div className="p-2 w-full border-2">
      <h1 className="text-xl font-semibold border-b">Form</h1>
      <div className="flex flex-col gap-2">
        <label>Position</label>
        <Input
          value={proposal.position}
          onChange={(e) =>
            setProposal((prev) => ({ ...prev, position: e.target.value }))
          }
        />
        <label>Project</label>
        <Input
          value={proposal.projectTitle}
          onChange={(e) =>
            setProposal((prev) => ({ ...prev, projectTitle: e.target.value }))
          }
        />
        <label>Design Given</label>
        <Switch
          checked={proposal.designGiven}
          onCheckedChange={(value) =>
            setProposal((prev) => ({ ...prev, designGiven: value }))
          }
        />
        <label>Questions</label>
        {proposal.questions.active.map((question) => (
          <div className="flex gap-1 items-center">
            <p>{question}</p>
            <Switch
              checked={proposal.questions.active.includes(question)}
              className="ml-auto"
              onCheckedChange={() =>
                setProposal((prev) => ({
                  ...prev,
                  questions: manageQuestions(question, prev.questions, true),
                }))
              }
            />
          </div>
        ))}
        {proposal.questions.inactive.map((question) => (
          <div className="flex gap-1 items-center">
            <p>{question}</p>
            <Switch
              className="ml-auto"
              checked={proposal.questions.active.includes(question)}
              onCheckedChange={() =>
                setProposal((prev) => ({
                  ...prev,
                  questions: manageQuestions(question, prev.questions),
                }))
              }
            />
          </div>
        ))}
        <div className="flex gap-3">
          <Input
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <Button
            size={"sm"}
            disabled={newQuestion == ""}
            onClick={() => {
              setProposal((prev) => ({
                ...prev,
                questions: {
                  ...prev.questions,
                  active: [...prev.questions.active, newQuestion],
                },
              }));
              setNewQuestion("");
            }}
          >
            Add
          </Button>
        </div>
        <label>Interesting Things</label>
        <Input
          value={proposal.interestingThings}
          onChange={(e) =>
            setProposal((prev) => ({
              ...prev,
              interestingThings: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
};
export default ProposalForm;
