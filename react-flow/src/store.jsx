import { configureStore } from "@reduxjs/toolkit";
import jsonReducer from "./slice/jsonSlice";

export default configureStore({
  reducer: { jsonHelper: jsonReducer },
});
