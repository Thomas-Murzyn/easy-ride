import {
  ArticleContainer,
  ArticleInfo,
  ArticlePictureContainer,
  ArticleInfoContainer,
} from "./store-article.styles";
import { Article } from "../../app/features/articles/articles.slice";

const StoreArticle = ({ article }: { article: Article }) => {
  return (
    <ArticleContainer>
      <ArticlePictureContainer>
        <img src={article.imageUrls[0]} />
      </ArticlePictureContainer>
      <ArticleInfoContainer>
        <ArticleInfo>{article.articleName}</ArticleInfo>
        <ArticleInfo>Prix : {article.price}€</ArticleInfo>
      </ArticleInfoContainer>
    </ArticleContainer>
  );
};

export default StoreArticle;
