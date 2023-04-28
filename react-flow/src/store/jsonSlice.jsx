import { createSlice, configureStore } from "@reduxjs/toolkit";
import data from "../components/mocks/data-vis.json";
import { addChildById, modifyDataById } from "../helper/jsonHelper";

const jsonSlice = createSlice({
  name: "jsonHelper",
  initialState: data,
  reducers: {
    modifyData(state, action) {
      const { id } = action.payload;
      // Modify the state using the modifyDisplayNameById function
      state = modifyDataById(id, state, action.payload);
    },
    addData(state, action) {
      const { id } = action.payload;
      // Modify the state using the modifyDisplayNameById function
      state = addChildById(id, state, action.payload);
    },
  },
});

export const jsonActions = jsonSlice.actions;
export default jsonSlice;
