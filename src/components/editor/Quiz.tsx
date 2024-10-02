import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Dispatch, SetStateAction, useState } from "react";
interface IQuizProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export default function Quiz({ setIsOpen }: IQuizProps) {
  return (
    <>
      <div className=" flex justify-between items-center">
        <h2 className="text-base font-bold">Generate quiz</h2>
        <Button variant="ghost" size="icon">
          <X className="h-4 w-4" />
        </Button>
      </div>
      <Input
        className="rounded-sm"
        placeholder="Enter the topic that the Ai uses to generate the quiz"
      />
      <Button
        onClick={() => setIsOpen(true)}
        className="rounded-sm bg-blue-500"
      >
        Play
      </Button>
    </>
  );
}
