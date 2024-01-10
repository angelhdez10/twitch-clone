import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  className?: string;
}
const LiveBadge = ({ className }: LiveBadgeProps) => {
  return (
    <div
      className={cn(
        "bg-rose-500 text-center text-[10px] p-0.5 px-1.5 rounded-md flex items-center uppercase border border-background font-semibold tracking-wide",
        className,
      )}
    >
      Live
    </div>
  );
};

export default LiveBadge;
