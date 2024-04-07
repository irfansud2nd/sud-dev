import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const ProjectBadge = ({
  type,
  full,
  className,
}: {
  type: "commercial" | "personal";
  full?: boolean;
  className?: string;
}) => {
  const text = full ? type : type.slice(0, 1);
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <span
            className={`capitalize text-center rounded-full font-semibold cursor-default
            ${type == "commercial" ? "bg-yellow-500" : "bg-green-500"}
            ${full ? "px-2" : "w-6 h-6"}
            ${className}
          `}
          >
            {text}
          </span>
        </TooltipTrigger>
        <TooltipContent hidden={full}>
          <p className="capitalize">{type}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default ProjectBadge;
