import React, { createContext, useContext, useState } from 'react';

type SelectedNodeContextType = {
  selectedNode: any[];
  setSelectedNode: React.Dispatch<React.SetStateAction<any[]>>;
};

const SelectedNodeContext = createContext<SelectedNodeContextType | undefined>(undefined);

export const SelectedNodeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedNode, setSelectedNode] = useState<any[]>([]);
  return (
    <SelectedNodeContext.Provider value={{ selectedNode, setSelectedNode }}>
      {children}
    </SelectedNodeContext.Provider>
  );
};

export const useSelectedNode = () => {
  const context = useContext(SelectedNodeContext);
  if (!context) {
    throw new Error('useSelectedNode must be used within a SelectedNodeProvider');
  }
  return context;
};
