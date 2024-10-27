import { useCallback, useState } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
  NodeToolbar,
  Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { NotebookPen, Pencil, Trash2 } from "lucide-react";
import { useSelectedNode } from "@/context/selected-node-context";

export default function Mindmap({
  isSetOpen,
}: {
  isSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const initialNodes = [
    {
      id: "1",
      position: { x: 300, y: 200 },
      data: { label: "Chiến dịch Điện Biên Phủ" },
      type: "customNode",
    },
    {
      id: "2",
      position: { x: 100, y: 300 },
      data: { label: "Chiến trường" },
      type: "customNode",
    },
    {
      id: "3",
      position: { x: 500, y: 300 },
      data: { label: "Bối cảnh" },
      type: "customNode",
    },
    {
      id: "4",
      position: { x: 300, y: 400 },
      data: { label: "Mục tiêu" },
      type: "customNode",
    },
  ];

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e1-3", source: "1", target: "3", animated: true },
    { id: "e1-4", source: "1", target: "4", animated: true },
  ];
  const CustomNode = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="relative flex items-center p-3 bg-white border border-gray-300 rounded-lg shadow-md text-gray-800">
        <div className="flex-1">{data.label}</div>

        <NodeToolbar
          isVisible
          className="flex flex-col space-y-2"
          position={Position.Right}
        >
          <NotebookPen
            className="cursor-pointer size-5 text-green-500"
            onClick={() => isSetOpen(true)}
          />
          <Pencil className="cursor-pointer size-5 text-blue-500" />
          <Trash2 className="cursor-pointer size-5 text-red-500" />
        </NodeToolbar>
        <Handle
          type="source"
          position={Position.Bottom}
          className="w-2 h-2 bg-green-500"
        />
        <Handle
          type="target"
          position={Position.Top}
          className="w-2 h-2 bg-blue-500"
        />
      </div>
    );
  };
  const nodeTypes = { customNode: CustomNode };
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const { selectedNode, setSelectedNode } = useSelectedNode();
  const handleNodeClick = (event: React.MouseEvent, node: Node) => {
    setSelectedNode((prev) => {
      // Kiểm tra nếu node đã có trong selectedNode
      const nodeExists = prev.some((n) => n.id === node.id);
      if (nodeExists) {
        // Nếu đã có, xóa node ra khỏi mảng
        return prev.filter((n) => n.id !== node.id);
      } else {
        // Nếu chưa có, thêm node vào mảng
        return [...prev, node];
      }
    });
    console.log(selectedNode);

  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onNodeClick={handleNodeClick}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
}
