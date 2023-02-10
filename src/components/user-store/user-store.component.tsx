import { StoreContainer, StoreTitle } from "./user-store.styles";

import { useAppSelector } from "../../app/hooks/hooks";
import { selectCurrentUser } from "../../app/features/user/user.selector";
import { selectUserArticles } from "../../app/features/articles/articles.selector";
import StoreArticle from "../store-article/store-article.component";

function UserStore() {
  const currentUser = useAppSelector(selectCurrentUser);
  const articles = useAppSelector(
    selectUserArticles(currentUser?.userId as string)
  );

  return (
    <>
      <StoreTitle>Vos articles</StoreTitle>
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

export default UserStore;
