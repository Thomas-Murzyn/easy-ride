import {
  StoreArticlesContainer,
  StoreContainer,
} from "./store-articles.styles";
import StoreHeader from "../store-header/store-header.component";
import { useAppSelector } from "../../app/hooks/hooks";
import { selectArticles } from "../../app/features/articles/articles.selector";
import StoreArticle from "../store-article/store-article.component";

function StoreArticles() {
  const articles = useAppSelector(selectArticles);

  return (
    <StoreContainer>
      <StoreHeader />

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
