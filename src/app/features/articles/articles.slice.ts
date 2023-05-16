import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Offer = {
  userId: string;
  name: string;
  message?: string;
  amount: number;
};

export type Article = {
  articleName: string;
  category: string;
  description: string;
  imageUrls: string[];
  price: string;
  userId: string;
  id: string;
  offers: Offer[];
};

export type Articles = {
  articles: Article[];
};

const initialState: Articles = {
  articles: [],
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    fetchArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
  },
});

export const { fetchArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
