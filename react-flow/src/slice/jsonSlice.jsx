import { createSlice } from "@reduxjs/toolkit";
import data from "../components/mocks/data-vis.json";
// import { modifyDisplayNameById } from "../helper/jsonHelper";

function modifyDisplayNameById(id, newDisplayName, jsonData) {
  for (var key in jsonData) {
    if (typeof jsonData[key] === "object" && jsonData[key] !== null) {
      // If the current property is an object (nested JSON)
      modifyDisplayNameById(id, newDisplayName, jsonData[key]); // Recursively search in the nested JSON
    } else if (key === "id" && jsonData[key] === id) {
      // If the current property is the 'id' key and its value matches the input ID
      if ("DisplayName" in jsonData) {
        // If the 'DisplayName' key exists in the current data point
        jsonData["DisplayName"] = newDisplayName; // Update the display name value
        console.log("json modify", jsonData);

        return jsonData;
      }
    }
  }
}

export const jsonSlice = createSlice({
  name: "jsonHelper",
  initialState: data,
  reducers: {
    modifyDisplayName: (state, action) => {
      const { id, newDisplayName } = action.payload;
      console.log("state", state.data);

      modifyDisplayNameById(id, newDisplayName, state.data);
    },
  },
});

// Extract the reducer and actions from the slice
export const { modifyDisplayName } = jsonSlice.actions;

// Define the selector to access the JSON data from the Redux store
export const selectJsonData = (state) => state.json.jsonData;

// Export the slice reducer
export default jsonSlice.reducer;
