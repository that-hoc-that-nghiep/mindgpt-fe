import { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
const initialNodes = [
  {
    id: "1",
    position: { x: 300, y: 200 },
    data: { label: "Chiến dịch Điện Biên Phủ" },
  },
  { id: "2", position: { x: 100, y: 300 }, data: { label: "Chiến trường" } },
  { id: "3", position: { x: 500, y: 300 }, data: { label: "Bối cảnh" } },
  { id: "4", position: { x: 300, y: 400 }, data: { label: "Mục tiêu" } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e1-4", source: "1", target: "4", animated: true },
];

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
      fitView
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
}
