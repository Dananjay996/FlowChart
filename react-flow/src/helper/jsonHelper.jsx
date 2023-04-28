export function modifyDataById(id, jsonData, obj = {}) {
  for (var key in jsonData) {
    if (typeof jsonData[key] === "object" && jsonData[key] !== null) {
      // If the current property is an object (nested JSON)
      modifyDataById(id, jsonData[key], obj); // Recursively search in the nested JSON
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
export function addChildById(id, jsonData, childObj) {
  console.log("entered");
  for (var key in jsonData) {
    if (typeof jsonData[key] === "object" && jsonData[key] !== null) {
      // If the current property is an object (nested JSON)
      console.log("recursion", key, jsonData[key]);
      addChildById(id, jsonData[key], childObj); // Recursively search in the nested JSON
    } else if (key === "id" && jsonData[key] === id) {
      console.log("entered else if");
      // If the current property is the 'id' key and its value matches the input ID

      jsonData["Childs"].push({ ...childObj, id: crypto.randomUUID() }); // Add the child object to the 'Childs' array
      console.log("push", { ...childObj, id: crypto.randomUUID() });
      console.log("exited else if");
      break;
    }
  }
}
