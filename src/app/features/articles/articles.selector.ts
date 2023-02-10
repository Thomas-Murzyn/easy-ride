import { createSelector } from "reselect";
import { RootState } from "../../store";

export const selectArticlesReducer = (state: RootState) => state.articles;

export const selectArticles = createSelector(
  selectArticlesReducer,
  (articles) => articles.articles
);

export const selectUserArticles = (userId: string) => {
  return createSelector(selectArticlesReducer, (articles) =>
    articles.articles.filter((article) => {
      return article.userId === userId;
    })
  );
};

// export const selectUserArticles = createSelector(
//   selectArticlesReducer,
//   (articles) => articles.articles
// );
