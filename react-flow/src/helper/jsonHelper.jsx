export function modifyDisplayNameById(id, jsonData, obj = {}) {
  for (var key in jsonData) {
    if (typeof jsonData[key] === "object" && jsonData[key] !== null) {
      // If the current property is an object (nested JSON)
      modifyDisplayNameById(id, jsonData[key], obj); // Recursively search in the nested JSON
    } else if (key === "id" && jsonData[key] === id) {
      // If the current property is the 'id' key and its value matches the input ID
      for (var key1 in obj) {
        jsonData[key1] = obj[key1];
        console.log("key1 ", key1, jsonData[key1], obj[key1]);
      }
      break;
    }
  }
  // console.log("json modify", jsonData);
}
