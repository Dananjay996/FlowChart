import { createSlice } from "@reduxjs/toolkit";
import data from "../components/mocks/data-vis.json";
import { modifyDisplayNameById } from "../helper/jsonHelper";

export const jsonSlice = createSlice({
  name: "counter",
  initialState: data,
  reducers: {
    modifyDisplayName: (state, action) => {
      const { id, newDisplayName } = action.payload;
      modifyDisplayNameById(id, newDisplayName, state.jsonData);
    },
  },
});

// Extract the reducer and actions from the slice
export const { modifyDisplayName } = jsonSlice.actions;

// Define the selector to access the JSON data from the Redux store
export const selectJsonData = (state) => state.json.jsonData;

// Export the slice reducer
export default jsonSlice.reducer;
