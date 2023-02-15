import { StoreContainer } from "./store-articles.styles";

import { useAppSelector } from "../../app/hooks/hooks";
import { selectArticles } from "../../app/features/articles/articles.selector";
import StoreArticle from "../store-article/store-article.component";

function UserStoreArticles() {
  const articles = useAppSelector(selectArticles);

  return (
    <>
      <StoreContainer>
        {articles.map((article) => {
          return (
            <StoreArticle
              key={Math.floor(Math.random() * 10000)}
              article={article}
            />
          );
        })}
      </StoreContainer>
    </>
  );
}

export default UserStoreArticles;
