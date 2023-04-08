import React, { useCallback, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  applyNodeChanges,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";
import { useSelector, useDispatch } from "react-redux";
import { addEdges, addNodes } from "../../../slices/CanvaSlice";

// const initialNodes = [
//   { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
//   { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
// ];
// const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function Canvas() {
  const node = useSelector((state) => state.counter.nodes);
  const edge = useSelector((state) => state.counter.edges);
  // const dispatch = useDispatch();
  const [nodes, setNodes] = useState(node);
  const [edges, setEdges] = useState(edge);
  console.log("Node", node);
  console.log("Edge", edge);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div
      style={{ width: "80%", height: "50vh" }}
      className="border-2 block m-auto my-8"
    >
      <ReactFlow
        nodes={node}
        edges={edge}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
