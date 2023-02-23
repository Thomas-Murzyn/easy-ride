import {
  StoreArticlesContainer,
  StoreContainer,
} from "./store-articles.styles";
import StoreHeader from "../store-header/store-header.component";
import { useAppSelector } from "../../app/hooks/hooks";
import { selectArticlesByCategories } from "../../app/features/articles/articles.selector";
import StoreArticle from "../store-article/store-article.component";
import { useState } from "react";

function StoreArticles() {
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([]);

  const articles = useAppSelector(
    selectArticlesByCategories(categoriesSelected)
  );

  const handleCategories = (category: string) => {
    if (categoriesSelected.includes(category)) {
      return;
    }
    const newArr = [...categoriesSelected];
    newArr.push(category);
    setCategoriesSelected(newArr);
  };

  const clearCategory = (category: string) => {
    if (!categoriesSelected.includes(category)) {
      return;
    }
    setCategoriesSelected(
      categoriesSelected.filter((item) => item !== category)
    );
  };

  return (
    <StoreContainer>
      <StoreHeader
        handleCategories={handleCategories}
        categoriesSelected={categoriesSelected}
        clearCategory={clearCategory}
      />

      <StoreArticlesContainer>
        {articles.map((article) => {
          return (
            <StoreArticle
              key={Math.floor(Math.random() * 10000)}
              article={article}
            />
          );
        })}
      </StoreArticlesContainer>
    </StoreContainer>
  );
}

export default StoreArticles;
