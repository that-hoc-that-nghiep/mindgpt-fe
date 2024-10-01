import Header from "@/components/editor/layout/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Modal from "@/components/editor/Modal";
import SaveForm from "@/components/editor/SaveForm";
import Sidebar from "@/components/editor/layout/Sidebar";
const MindmapEditorLayout = () => {
  const [isSaveOpen, setSaveOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen flex-col">
        <Header setIsOpen={setSaveOpen} />
        <div className="flex h-full flex-row">
          <Sidebar />
          <Outlet />
        </div>
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
