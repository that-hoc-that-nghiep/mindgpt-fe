import {
  ClipboardList,
  MessageCircleMore,
  PenSquare,
  PuzzleIcon,
} from "lucide-react";
import ChatBot from "../ChatBot";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { SelectFunc } from "@/constants/editor";
import Summary from "../Summary";
import ManualEdit from "../ManualEdit";
import Quiz from "../Quiz";
import { Button } from "@/components/ui/button";
interface ISidebarProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export default function Sidebar({ setIsOpen }: ISidebarProps) {
  const funcComponent: Record<SelectFunc, ReactElement> = {
    [SelectFunc.CHATBOT]: <ChatBot />,
    [SelectFunc.SUMMARY]: <Summary />,
    [SelectFunc.QUIZ]: <Quiz setIsOpen={setIsOpen} />,
    [SelectFunc.EDIT]: <ManualEdit />,
  };
  const [isSelect, setIsSelect] = useState<SelectFunc>(SelectFunc.CHATBOT);
  const [open, setOpen] = useState(true);

  const handleSelect = (selectFunc: SelectFunc) => {
    if (isSelect === selectFunc) {
      setOpen(!open);
    } else {
      setIsSelect(selectFunc);
      setOpen(true);
    }
  };
  return (
    <div className="border-r flex flex-row">
      <div className=" flex flex-col p-2 space-y-5 border">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleSelect(SelectFunc.CHATBOT)}
        >
          <MessageCircleMore className="text-blue-500" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleSelect(SelectFunc.SUMMARY)}
        >
          <ClipboardList className="text-blue-500" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleSelect(SelectFunc.QUIZ)}
        >
          <PuzzleIcon className="text-blue-500" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleSelect(SelectFunc.EDIT)}
        >
          <PenSquare className="text-blue-500" />
        </Button>
      </div>
      {open && isSelect && (
        <div className="flex flex-col w-[25rem] p-3 space-y-2">
          {funcComponent[isSelect]}
        </div>
      )}
    </div>
  );
}
