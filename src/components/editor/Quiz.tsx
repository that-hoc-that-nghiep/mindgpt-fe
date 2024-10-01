import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Quiz() {
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
      <Button className="rounded-sm bg-blue-500">Play</Button>
    </>
  );
}
