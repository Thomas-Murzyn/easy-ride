import {
  ArticleContainer,
  ArticleInfo,
  ArticlePictureContainer,
  ArticleInfoContainer,
  NotificationLogo,
} from "./store-article.styles";
import { Article } from "../../app/features/articles/articles.slice";
import { useNavigate, useLocation } from "react-router-dom";

const StoreArticle = ({ article }: { article: Article }) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const goToArticle = () => {
    navigate(`${location}/article/${article.id}`);
  };

  return (
    <ArticleContainer onClick={goToArticle}>
      <ArticlePictureContainer>
        <img src={article.imageUrls[0]} alt={article.articleName} />
      </ArticlePictureContainer>
      <ArticleInfoContainer>
        <ArticleInfo>{article.articleName}</ArticleInfo>
        <ArticleInfo>Prix : {article.price}€</ArticleInfo>
        {article.offers.length > 0 && (
          <NotificationLogo>{article.offers.length}</NotificationLogo>
        )}
      </ArticleInfoContainer>
    </ArticleContainer>
  );
};

export default StoreArticle;
