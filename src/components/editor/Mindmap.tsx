import { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { NotebookPen, Pencil, Trash2 } from "lucide-react";
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
  const handleNoteClick = () => alert(`Note clicked on node: ${data.label}`);
  const handleEditClick = () => alert(`Edit clicked on node: ${data.label}`);
  const handleDeleteClick = () =>
    alert(`Delete clicked on node: ${data.label}`);

  return (
    <div className="relative flex items-center p-3 bg-white border border-gray-300 rounded-lg shadow-md text-gray-800">
      <div className="flex-1">{data.label}</div>

      <div className="absolute flex flex-col space-y-1 right-[-15px] top-1/2 transform -translate-y-1/2">
        <NotebookPen
          className="cursor-pointer size-3 text-green-500"
          onClick={handleNoteClick}
        />
        <Pencil
          className="cursor-pointer size-3 text-blue-500"
          onClick={handleEditClick}
        />
        <Trash2
          className="cursor-pointer size-3 text-red-500"
          onClick={handleDeleteClick}
        />
      </div>

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
export default function Mindmap() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
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
