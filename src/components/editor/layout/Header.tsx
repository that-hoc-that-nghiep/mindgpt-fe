import { BrainCircuit, Check, PenSquare } from "lucide-react";
import { Button } from "../../ui/button";
import { Dispatch, SetStateAction, useState } from "react";
interface IHeaderProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export default function Header({ setIsOpen }: IHeaderProps) {
  const [text, setText] = useState("Chiến dịch Điện Biên Phủ");
  const [isEditing, setIsEditing] = useState(false);
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
      <div className="flex items-center space-x-2">
        <BrainCircuit className="size-6 text-primary" />
        <h1 className="text-lg font-semibold">MindGPT</h1>
        <span className="h-4 border border-l-1 border-gray-300 bg-gray-300" />
        {isEditing ? (
          <>
            <input
              autoFocus
              className="text-base font-bold"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></input>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant="ghost"
              size="icon"
            >
              <Check className="size-4" />
            </Button>
          </>
        ) : (
          <>
            <div className="text-base font-bold">{text}</div>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant="ghost"
              size="icon"
            >
              <PenSquare className="size-4" />
            </Button>
          </>
        )}
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded bg-green-500 px-3 py-1 text-white"
      >
        Save
      </button>
    </header>
  );
}
