import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getArticles } from "../../../utils/firebase/firebase.utils";

export type Article = {
  articleName: string;
  category: string;
  description: string;
  imageUrls: string[];
  price: string;
  userId: string;
};

export type Articles = {
  isLoading: boolean;
  articles: Article[];
  error: string;
};

const initialState: Articles = {
  isLoading: false,
  articles: [],
  error: "",
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const articles = await getArticles();
    if (articles) {
      return articles as Article[];
    } else {
      return [] as Article[];
    }
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchArticles.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        state.articles = action.payload;
      }
    );
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.articles = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default articlesSlice.reducer;
