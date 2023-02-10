import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/user.slice";
import articlesReducer from "./features/articles/articles.slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    articles: articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
