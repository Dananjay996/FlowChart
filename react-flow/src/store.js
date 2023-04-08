import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/CanvaSlice";

export default configureStore({
  reducer: { counter: counterReducer },
});
