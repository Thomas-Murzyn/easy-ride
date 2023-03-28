import {
  UserStoreContainer,
  UserStoreTitle,
} from "./user-articles-store.styles";

import { useAppSelector } from "../../app/hooks/hooks";
import { selectCurrentUser } from "../../app/features/user/user.selector";
import { selectUserArticles } from "../../app/features/articles/articles.selector";
import StoreArticle from "../store-article/store-article.component";

function UserStoreArticles() {
  const currentUser = useAppSelector(selectCurrentUser);
  const articles = useAppSelector(
    selectUserArticles(currentUser?.userId as string)
  );

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100000000);
  };

  return (
    <>
      <UserStoreTitle>Vos articles</UserStoreTitle>
      <UserStoreContainer>
        {articles.map((article) => {
          return <StoreArticle key={getRandomNumber()} article={article} />;
        })}
      </UserStoreContainer>
    </>
  );
}

export default UserStoreArticles;
