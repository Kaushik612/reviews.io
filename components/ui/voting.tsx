import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import React from "react";

interface VotingProps {
  votes: number;
}

const Voting = ({ votes }: VotingProps) => {
  return (
    <div className="bg-white dark:bg-slate-500 rounded-md shadow-sm flex px-2 py-2">
      <div className="flex gap-3 items-center justify-center">
        <ArrowBigUp fill={votes > 0 ? "green" : "white"} size={15} />
        <span>{votes}</span>
        <ArrowBigDown fill={votes < 0 ? "red" : "white"} size={15} />
      </div>
    </div>
  );
};

export default Voting;
