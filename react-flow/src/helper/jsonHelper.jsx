export function modifyDisplayNameById(id, newDisplayName, jsonData) {
  for (var key in jsonData) {
    if (typeof jsonData[key] === "object" && jsonData[key] !== null) {
      // If the current property is an object (nested JSON)
      modifyDisplayNameById(id, newDisplayName, jsonData[key]); // Recursively search in the nested JSON
    } else if (key === "id" && jsonData[key] === id) {
      // If the current property is the 'id' key and its value matches the input ID
      if ("DisplayName" in jsonData) {
        // If the 'DisplayName' key exists in the current data point
        jsonData["DisplayName"] = newDisplayName; // Update the display name value
        break; // Exit the loop after the update
      }
    }
  }
}
