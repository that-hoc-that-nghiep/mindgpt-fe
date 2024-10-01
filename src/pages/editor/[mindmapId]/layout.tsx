import Header from "@/components/editor/layout/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Modal from "@/components/editor/Modal";
import SaveForm from "@/components/editor/SaveForm";
const MindmapEditorLayout = () => {
  const [isSaveOpen, setSaveOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen flex-col">
        <Header setIsOpen={setSaveOpen} />
        <Outlet />
      </div>
      <Modal
        isOpen={isSaveOpen}
        setIsOpen={setSaveOpen}
        title="Confirm minmap"
        description="Are you sure you want to save this mindmap?"
      >
        <SaveForm setIsOpen={setSaveOpen} minmapId={1}></SaveForm>
      </Modal>
    </>
  );
};

export default MindmapEditorLayout;
