import {
  StoreArticlesContainer,
  StoreContainer,
} from "./store-articles.styles";
import { Article } from "../../app/features/articles/articles.slice";
import StoreHeader from "../store-header/store-header.component";
import { useAppSelector } from "../../app/hooks/hooks";
import { selectArticlesByCategories } from "../../app/features/articles/articles.selector";
import StoreArticle from "../store-article/store-article.component";
import { useState } from "react";

export type priceFilter = "asc" | "desc" | "unset";

function StoreArticles() {
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([]);
  const [price, setPrice] = useState<number[]>([0, 300]);
  const [filter, setFilter] = useState<priceFilter>("unset");

  let articles: Article[] = useAppSelector(
    selectArticlesByCategories(categoriesSelected, price)
  );

  const handleChangePrice = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    const minDistance = 100;

    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
    }
  };

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

  if (filter === "asc") {
    return (
      <StoreContainer>
        <StoreHeader
          handleCategories={handleCategories}
          categoriesSelected={categoriesSelected}
          clearCategory={clearCategory}
          handleChangePrice={handleChangePrice}
          price={price}
          setFilter={setFilter}
        />

        <StoreArticlesContainer>
          {articles
            .sort((a, b) => Number(a.price) - Number(b.price))
            .map((article) => {
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

  if (filter === "desc") {
    return (
      <StoreContainer>
        <StoreHeader
          handleCategories={handleCategories}
          categoriesSelected={categoriesSelected}
          clearCategory={clearCategory}
          handleChangePrice={handleChangePrice}
          price={price}
          setFilter={setFilter}
        />

        <StoreArticlesContainer>
          {articles
            .sort((a, b) => Number(b.price) - Number(a.price))
            .map((article) => {
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

  return (
    <StoreContainer>
      <StoreHeader
        handleCategories={handleCategories}
        categoriesSelected={categoriesSelected}
        clearCategory={clearCategory}
        handleChangePrice={handleChangePrice}
        price={price}
        setFilter={setFilter}
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
