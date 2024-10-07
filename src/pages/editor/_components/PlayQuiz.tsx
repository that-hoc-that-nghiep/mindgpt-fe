import { ISentenceQuiz } from "@/services";
import SentenceQuiz from "./SentenceQuiz";
import { useState } from "react";
import { NotificationToast } from "@/common/notificationToast";
import { Button } from "@/components/ui/button";
import toast, { useToasterStore } from "react-hot-toast";

export default function PlayQuiz() {
  const sentences: ISentenceQuiz[] = [
    {
      id: 1,
      question: "hello",
      answers: ["hello", "hi", "howdy", "howdy"],
    },
    {
      id: 2,
      question: "hello",
      answers: ["hello", "hi", "howdy", "asdasd"],
    },
    {
      id: 3,
      question: "hello",
      answers: ["hello", "hi", "howdy", "asdasd"],
    },
    {
      id: 4,
      question: "hello",
      answers: ["hello", "hi", "howdy", "asdsad"],
    },
  ];
  const wait = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time));
  const toaster = useToasterStore();
  const loading = toaster.toasts.some((t) => t.type === "loading");
  const handleSubmitQuiz = async () => {
    toast.promise(wait(1500), {
      loading: "Submitting...",
      success: "Quiz submitted successfully",
      error: "Error submitting quiz",
    });
  };
  return (
    <div className="flex flex-col space-y-2">
      {sentences.map((sentence, index) => (
        <SentenceQuiz key={index} {...sentence} />
      ))}
      <p className="text-center text-xs text-gray-400 mb-2">
        Any information generated from AI may not be absolutely accurate, please
        verify first
      </p>
      <Button
        onClick={() => handleSubmitQuiz()}
        className="bg-blue-500 rounded-sm"
        disabled={loading}
      >
        {loading ? "Loading..." : "Show answer"}
      </Button>
    </div>
  );
}
