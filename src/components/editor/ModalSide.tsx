import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface ModalSideProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description?: string;
  children: React.ReactNode;
}
export default function ModalSide({
  isOpen,
  setIsOpen,
  title,
  description,
  children,
}: ModalSideProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {children}
        <SheetFooter>
          <SheetClose asChild>
            <Button className="w-full rounded-sm" type="submit">
              Save
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
