import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feedSlice";

const store = configureStore({
  reducer: {
    feed: feedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
