import Header from "@/components/editor/layout/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Modal from "@/components/editor/Modal";
import Sidebar from "@/components/editor/layout/Sidebar";
import SaveForm from "@/components/editor/SaveForm";
import PlayQuiz from "@/components/editor/PlayQuiz";

const MindmapEditorLayout = () => {
  const [isOpen, setOpen] = useState(false);
  const [isQuizOpen, setQuizOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen flex-col">
        <Header setIsOpen={setOpen} />
        <div className="flex h-full flex-row">
          <Sidebar setIsOpen={setQuizOpen} />
          <Outlet />
        </div>
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setOpen}
          title="Confirm minmap"
          description="Are you sure you want to save this mindmap?"
        >
          <SaveForm setIsOpen={setOpen} minmapId={1}></SaveForm>
        </Modal>
      )}
      {isQuizOpen && (
        <Modal isOpen={isQuizOpen} setIsOpen={setQuizOpen} title="Play Quiz">
          <PlayQuiz />
        </Modal>
      )}
    </>
  );
};

export default MindmapEditorLayout;
