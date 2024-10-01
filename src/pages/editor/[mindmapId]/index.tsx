import Mindmap from "@/components/editor/Mindmap";
import ModalSide from "@/components/editor/ModalSide";
import TakeNote from "@/components/editor/TakeNote";
import { useState } from "react";

const MindmapEditorPage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Mindmap isSetOpen={setOpen} />
      <ModalSide
        isOpen={isOpen}
        setIsOpen={setOpen}
        title="Take note"
        description="Chiến dịch Điện Biện Phủ"
      >
        <TakeNote />
      </ModalSide>
    </>
  );
};

export default MindmapEditorPage;
