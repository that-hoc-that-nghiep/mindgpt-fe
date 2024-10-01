import {
  ClipboardList,
  MessageCircleMore,
  PenSquare,
  PuzzleIcon,
  X,
} from "lucide-react";
import ChatBot from "../ChatBot";
import { ReactElement, useState } from "react";
import { SelectFunc } from "@/constants/editor";
import Summary from "../Summary";
import ManualEdit from "../ManualEdit";
import Quiz from "../Quiz";
import { Toggle } from "@/components/ui/toggle";

export default function Sidebar() {
  const funcComponent: Record<SelectFunc, ReactElement> = {
    [SelectFunc.CHATBOT]: <ChatBot />,
    [SelectFunc.SUMMARY]: <Summary />,
    [SelectFunc.QUIZ]: <Quiz />,
    [SelectFunc.EDIT]: <ManualEdit />,
  };
  const [isSelect, setIsSelect] = useState<SelectFunc>(SelectFunc.CHATBOT);
  const [open, setOpen] = useState(false);
  const handleSelect = (selectFunc: SelectFunc) => {
    setIsSelect(selectFunc);
    setOpen(!open);
  };
  return (
    <div className="border-r flex flex-row">
      <div className=" flex flex-col p-2 space-y-5 border">
        <Toggle
          aria-label="Toggle bold"
          onClick={() => handleSelect(SelectFunc.CHATBOT)}
        >
          <MessageCircleMore />
        </Toggle>
        <Toggle onClick={() => handleSelect(SelectFunc.SUMMARY)}>
          <ClipboardList />
        </Toggle>
        <Toggle onClick={() => handleSelect(SelectFunc.QUIZ)}>
          <PuzzleIcon />
        </Toggle>
        <Toggle onClick={() => handleSelect(SelectFunc.EDIT)}>
          <PenSquare />
        </Toggle>
      </div>
      {open && (
        <div className="flex flex-col w-[25rem] p-3 space-y-2">
          {funcComponent[isSelect]}
        </div>
      )}
    </div>
  );
}
