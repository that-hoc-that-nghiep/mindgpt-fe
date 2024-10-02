import { ISentenceQuiz } from "@/services";

const CharacterAnswer: Record<number, string> = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
};
export default function SentenceQuiz({ id, question, answers }: ISentenceQuiz) {
  return (
    <div className="flex flex-col space-y-2 ">
      <p className="font-bold text-blue-500">
        Question {id}:{" "}
        <span className="font-bold text-black ml-3">{question}</span>
      </p>
      <div className="grid grid-cols-2 gap-2">
        {answers.map((answer, index) => (
          <div
            key={index}
            className="flex items-center justify-center border border-2 rounded-sm py-2 px-5 font-bold"
          >
            {CharacterAnswer[index + 1]} - {answer}
          </div>
        ))}
      </div>
    </div>
  );
}
