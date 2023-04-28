import { createSlice, configureStore } from "@reduxjs/toolkit";
import data from "../components/mocks/data-vis.json";
import { modifyDisplayNameById } from "../helper/jsonHelper";

const jsonSlice = createSlice({
  name: "jsonHelper",
  initialState: data,
  reducers: {
    modifyDisplayName(state, action) {
      const { id } = action.payload;

      // Modify the state using the modifyDisplayNameById function
      state = modifyDisplayNameById(id, state, action.payload);

      // Return the updated state
    },
  },
});

export const jsonActions = jsonSlice.actions;
export default jsonSlice;
