"use client";
import React from "react";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { VoteType, Vote } from "@prisma/client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

interface IProps {
  userId: string | null;
  reviewId: string | null;
  votes: Vote[];
}

const LikeCommentButton = ({ userId, reviewId, votes }: IProps) => {
  const totalVotes =
    votes.length === 0
      ? 0
      : votes.reduce((total, vote) => {
          return total + (vote.type === "UP" ? 1 : -1);
        }, 0);

  const _currentVote = votes.find((vote) => vote.userId === userId)?.type;

  const router = useRouter();
  const { toast } = useToast();

  const handleUpVote = async () => {
    const values = {
      userId,
      type: VoteType.UP,
    };
    try {
      await axios.patch(`/api/review/${reviewId}/vote`, values);
      toast({
        description: "Thank you for the feedback!",
        duration: 3000,
      });

      router.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        description: "There was an error submitting the request!",
        duration: 3000,
      });
    }
  };

  const handleDownVote = async () => {
    const values = {
      userId,
      type: VoteType.DOWN,
    };
    try {
      await axios.patch(`/api/review/${reviewId}/vote`, values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="flex items-center justify-center gap-2 bg-transparent py-1 px-2 font-bold bg-[#f4e2e1] rounded-md cursor-text">
      <BiSolidLike
        onClick={handleUpVote}
        className={`cursor-pointer ${
          _currentVote === "UP" && "text-[#dc2625]"
        }`}
      />
      <span>{totalVotes}</span>
      <BiSolidDislike
        onClick={handleDownVote}
        className={`cursor-pointer ${
          _currentVote === "DOWN" && " text-[#dc2625]"
        }`}
      />
    </button>
  );
};

export default LikeCommentButton;
