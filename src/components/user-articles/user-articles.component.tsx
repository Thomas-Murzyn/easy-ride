import {
  UserArticlesWrapper,
  UserArticle,
  UserArticleImage,
  UserArticleInfo,
  UserArticleDetails,
} from "./user-articles.styles";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import { selectUserArticles } from "../../app/features/articles/articles.selector";
import { Article } from "../../app/features/articles/articles.slice";

function UserArticles() {
  const { userId } = useParams();

  const articles = useAppSelector(selectUserArticles(userId as string));

  const getArticleWithOffers = (array: Article[]) => {
    let articlesOffers = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i].offers.length > 0) {
        articlesOffers.push(array[i]);
      }
    }

    return articlesOffers;
  };

  return (
    <UserArticlesWrapper>
      <h1>Vous avez de nouvelles offres sur les articles suivants :</h1>
      {getArticleWithOffers(articles).map((article, index) => {
        return (
          <UserArticle key={index}>
            <UserArticleImage>
              <img src={article.imageUrls[0]} alt={article.articleName} />
            </UserArticleImage>
            <UserArticleInfo>
              <span>Article : {article.articleName}</span>
              <span>Categorie : {article.category}</span>
              <span>Prix : {article.price}€</span>
            </UserArticleInfo>
            <UserArticleDetails>
              <span>Description : {article.description}</span>
              <span>Offres sur cette article :</span>
              {article.offers.map((item, index) => {
                return <span key={index}>Une offre à {item}€</span>;
              })}
            </UserArticleDetails>
          </UserArticle>
        );
      })}
    </UserArticlesWrapper>
  );
}

export default UserArticles;
