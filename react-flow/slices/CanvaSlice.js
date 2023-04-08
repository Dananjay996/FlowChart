import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    nodes: [
      { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
      { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
    ],
    edges: [{ id: "e1-2", source: "1", target: "2" }],
  },
  reducers: {
    addNodes: (state, action) => {
      state.nodes.push(action.payload[0]);
      console.log("state node ", action.payload);
    },
    addEdges: (state) => {
      state.edges.push({
        id: uuidv4(),
        target: state.nodes[state.nodes.length - 1].id,
        source: state.nodes[state.nodes.length - 2].id,
      });
      console.log("current edge", state.edges);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNodes, addEdges } = counterSlice.actions;

export default counterSlice.reducer;
