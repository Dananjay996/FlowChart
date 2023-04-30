import { configureStore } from "@reduxjs/toolkit";
import jsonSlice from "./jsonSlice";

const store = configureStore({
  reducer: { jsonHelper: jsonSlice.reducer },
});

export default store;
