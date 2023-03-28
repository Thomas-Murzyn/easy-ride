import { createSelector } from "reselect";
import { RootState } from "../../store";
import { Article } from "./articles.slice";

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

export const selectArticlesByCategories = (
  categories: string[],
  price: number[]
) => {
  return createSelector(selectArticlesReducer, (articles) => {
    if (categories.length) {
      const articlesFiltered: Article[] = [];
      for (let i = 0; i < categories.length; i++) {
        articles.articles.forEach((article) => {
          if (
            article.category === categories[i] &&
            price[0] <= Number(article.price) &&
            price[1] >= Number(article.price)
          ) {
            articlesFiltered.push(article);
          }
        });
      }

      return articlesFiltered;
    }

    //eslint-disable-next-line
    return articles.articles.filter((article) => {
      if (
        price[0] <= Number(article.price) &&
        price[1] >= Number(article.price)
      ) {
        return article;
      }
    });
  });
};

export const selectArticle = () => {};
