import {
  ArticleContainer,
  ArticleInfo,
  ArticlePictureContainer,
  ArticleInfoContainer,
  NotificationLogo,
} from "./store-article.styles";
import { Article } from "../../app/features/articles/articles.slice";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import { selectCurrentUser } from "../../app/features/user/user.selector";

const StoreArticle = ({ article }: { article: Article }) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const currentUser = useAppSelector(selectCurrentUser);

  const goToArticle = () => {
    navigate(`${location}/article/${article.id}`);
  };

  if (article.offers.length > 0 && article.userId === currentUser?.userId) {
    return (
      <ArticleContainer onClick={goToArticle}>
        <ArticlePictureContainer>
          <img src={article.imageUrls[0]} alt={article.articleName} />
        </ArticlePictureContainer>
        <ArticleInfoContainer>
          <ArticleInfo>{article.articleName}</ArticleInfo>
          <ArticleInfo>Prix : {article.price}€</ArticleInfo>
          <NotificationLogo>{article.offers.length}</NotificationLogo>
        </ArticleInfoContainer>
      </ArticleContainer>
    );
  }

  return (
    <ArticleContainer onClick={goToArticle}>
      <ArticlePictureContainer>
        <img src={article.imageUrls[0]} alt={article.articleName} />
      </ArticlePictureContainer>
      <ArticleInfoContainer>
        <ArticleInfo>{article.articleName}</ArticleInfo>
        <ArticleInfo>Prix : {article.price}€</ArticleInfo>
      </ArticleInfoContainer>
    </ArticleContainer>
  );
};

export default StoreArticle;
