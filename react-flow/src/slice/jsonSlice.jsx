import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import data from "../components/mocks/data-vis.json";

function modifyDisplayNameById(id, newDisplayName, jsonData) {
  // for (var key in jsonData) {
  //   if (typeof jsonData[key] === "object" && jsonData[key] !== null) {
  //     // If the current property is an object (nested JSON)
  //     modifyDisplayNameById(id, newDisplayName, jsonData[key]); // Recursively search in the nested JSON
  //   } else if (key === "id" && jsonData[key] === id) {
  //     // If the current property is the 'id' key and its value matches the input ID
  //     if ("DisplayName" in jsonData) {
  //       // If the 'DisplayName' key exists in the current data point
  //       jsonData["DisplayName"] = newDisplayName; // Update the display name value
  //       console.log("modify", jsonData);
  //       // return JSON.stringify(jsonData);
  //     }
  //   }
  // }
  console.log("modify", jsonData);
  return jsonData;
}

export const jsonSlice = createSlice({
  name: "jsonHelper",
  initialState: data,
  reducers: {
    modifyDisplayName: (state, action) => {
      const { id, newDisplayName } = action.payload;
      console.log("id", id, "displayname", newDisplayName);
      console.log("state", state.data, action.payload);

      // Modify the state using the modifyDisplayNameById function
      // const updatedData = modifyDisplayNameById(id, newDisplayName, state.data);

      // Return the updated state
    },
  },
});

// Extract the reducer and actions from the slice
export const { modifyDisplayName } = jsonSlice.actions;

// Define the selector to access the JSON data from the Redux store
export const selectJsonData = (state) => state.json.jsonData;

// Export the slice reducer
export default jsonSlice.reducer;
