export function modifyDataById(id, jsonData, obj = {}) {
  for (var key in jsonData) {
    if (typeof jsonData[key] === "object" && jsonData[key] !== null) {
      // If the current property is an object (nested JSON)
      modifyDataById(id, jsonData[key], obj); // Recursively search in the nested JSON
    } else if (key === "id" && jsonData[key] === id) {
      // If the current property is the 'id' key and its value matches the input ID
      if (obj == {}) {
        jsonData = {};
        console.log("deleted");
      } else {
        for (var key1 in obj) {
          jsonData[key1] = obj[key1];
          console.log("key1 ", key1, jsonData[key1], obj[key1]);
        }
      }
      break;
    }
  }
  // console.log("json modify", jsonData);
}
export function addChildById(id, jsonData, childObj) {
  for (var key in jsonData) {
    if (typeof jsonData[key] === "object" && jsonData[key] !== null) {
      // If the current property is an object (nested JSON)
      addChildById(id, jsonData[key], childObj); // Recursively search in the nested JSON
    } else if (key === "id" && jsonData[key] === id) {
      console.log("entered else if");
      // If the current property is the 'id' key and its value matches the input ID
      if (typeof jsonData["Childs"] == "undefined") {
        jsonData["Childs"] = [];
      }
      jsonData["Childs"].push({ ...childObj, id: crypto.randomUUID() }); // Add the child object to the 'Childs' array
      break;
    }
  }
}
export function deleteDataById(id, jsonData) {
  for (var key in jsonData) {
    if (typeof jsonData[key] === "object" && jsonData[key] !== null) {
      // If the current property is an object (nested JSON)
      deleteDataById(id, jsonData[key]); // Recursively search in the nested JSON
    } else if (key === "id" && jsonData[key] === id) {
      // If the current property is the 'id' key and its value matches the input ID

      jsonData["Childs"] = [];
      console.log("deleted");

      break;
    }
  }
}
