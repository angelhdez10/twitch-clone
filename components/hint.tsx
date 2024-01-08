import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

interface HintProps {
  label: string;
  children: React.ReactNode;
  asChild: boolean;
  side?: "top" | "left" | "right" | "bottom";
  align?: "start" | "center" | "end";
}

const Hint: React.FC<HintProps> = ({
  label,
  children,
  asChild,
  side,
  align,
}) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
          <TooltipContent
            className="bg-white text-black"
            side={side}
            align={align}
          >
            <p className="font-semibold">{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default Hint;
