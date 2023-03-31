import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function Canvas() {
  return (
    <div
      style={{ width: "80%", height: "50vh" }}
      className="border-2 block m-auto"
    >
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}
