import { ISentenceQuiz } from "@/services";
import { Button, ButtonProps } from "@/components/ui/button";
import toast, { useToasterStore } from "react-hot-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypeSelectAnswer } from "@/constants/editor";
import { useState } from "react";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";

export default function PlayQuiz({
  sentences,
}: {
  sentences: ISentenceQuiz[];
}) {
  const toaster = useToasterStore();
  const loading = toaster.toasts.some((t) => t.type === "loading");
  const [isSubmitting, setSubmitting] = useState(false);
  const [userAnswers, setUserAnswers] = useState(
    sentences.map(() => {
      return {
        answer: TypeSelectAnswer.X,
      };
    })
  );
  const wait = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time));
  const congratulations = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };
  const handleSubmitQuiz = async () => {
    toast
      .promise(wait(1500), {
        loading: "Submitting...",
        success: "Quiz submitted successfully",
        error: "Error submitting quiz",
      })
      .then(() => {
        setSubmitting(true);
        congratulations();
      });
  };

  const handleSelectAnwer = (index: number, userAnswer: TypeSelectAnswer) => {
    if (isSubmitting) return;
    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = {
        answer: userAnswer,
      };
      return newAnswers;
    });
  };
  const handleVariantButton = (
    answer: TypeSelectAnswer,
    userAnswer: TypeSelectAnswer,
    correctAnswer: TypeSelectAnswer
  ) => {
    if (isSubmitting) {
      return {
        variant:
          correctAnswer === answer
            ? "success"
            : userAnswer === answer
            ? "destructive"
            : "outline",
      };
    } else {
      return {
        variant: userAnswer === answer ? "default" : "outline",
      };
    }
  };
  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer.answer === sentences[index].correctAnswer) {
        score += 1;
      }
    });
    return score;
  };
  return (
    <ScrollArea className="h-[35rem] px-3">
      <div className="flex flex-col space-y-2">
        {isSubmitting && (
          <div>
            <h3 className="text-xl font-bold">Quiz Completed!</h3>
            <p>
              Your score: <span className="font-bold">{calculateScore()}</span>{" "}
              out of
              <span className="font-bold"> {sentences.length}</span>
            </p>
          </div>
        )}
        {sentences.map((sentence, index) => (
          <div className="flex flex-col space-y-2">
            <p className="font-bold text-blue-500">
              <span>Question {index + 1}:</span>
              <span className="font-bold text-black ml-3">
                {sentence.question}
              </span>
            </p>
            <div className="grid grid-cols-2 gap-2 pb-2">
              {sentence.answers.map((answer, indexAnswer) => (
                <Button
                  key={indexAnswer}
                  variant={
                    handleVariantButton(
                      answer.key,
                      userAnswers[index].answer,
                      sentence.correctAnswer
                    ).variant as ButtonProps["variant"]
                  }
                  onClick={() => handleSelectAnwer(index, answer.key)}
                  className="flex items-center justify-center rounded-sm border border-2"
                >
                  <span className="font-bold">{answer.key}</span>
                  <span className="px-1">-</span>
                  {answer.value}
                </Button>
              ))}
            </div>
          </div>
        ))}
        <p className="text-center text-xs text-gray-400 mb-2">
          Any information generated from AI may not be absolutely accurate,
          please verify first
        </p>
        <Button
          onClick={() => handleSubmitQuiz()}
          className={cn("bg-blue-500 rounded-sm", isSubmitting && "hidden")}
          disabled={
            loading || userAnswers.some((a) => a.answer === TypeSelectAnswer.X)
          }
        >
          {loading ? "Loading..." : "Submit"}
        </Button>
      </div>
    </ScrollArea>
  );
}
