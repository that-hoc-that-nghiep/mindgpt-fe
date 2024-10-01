import { Textarea } from "../ui/textarea";

export default function TakeNote() {
  return (
    <div className="my-5">
      <Textarea className="min-h-[25rem]" placeholder="Take note here" />
    </div>
  );
}
