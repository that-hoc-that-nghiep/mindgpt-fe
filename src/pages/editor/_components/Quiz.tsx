import { ShowNotificationError } from "@/common/notificationError";
import { NotificationToast } from "@/common/notificationToast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import toast, { useToasterStore } from "react-hot-toast";
interface IQuizProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export default function Quiz({ setIsOpen }: IQuizProps) {
  const wait = () => new Promise((resolve) => setTimeout(resolve, 2000));
  const { toasts } = useToasterStore();
  const loading = toasts.some((t) => t.type === "loading");
  const handleOpenQuiz = async () => {
    toast
      .promise(wait(), {
        loading: "Generating quiz...",
        success: "Quiz generated successfully",
        error: "Error generating quiz",
      })
      .then(() => {
        setIsOpen(true);
      });
  };
  return (
    <>
      <div className=" flex justify-between items-center">
        <h2 className="text-base font-bold">Generate quiz</h2>
        <Button variant="ghost" size="icon">
          <X className="h-4 w-4" />
        </Button>
      </div>
      <Input
        disabled={loading}
        className="rounded-sm"
        placeholder="Enter the topic that the Ai uses to generate the quiz"
      />
      <Button
        disabled={loading}
        onClick={() => handleOpenQuiz()}
        className="rounded-sm bg-blue-500"
      >
        Play
      </Button>
    </>
  );
}
