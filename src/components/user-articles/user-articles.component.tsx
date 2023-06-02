import {
  UserArticlesWrapper,
  UserArticle,
  UserArticleImage,
  UserArticleInfo,
  OfferInfo,
  OfferContainer,
  ModalButtonContainer,
  UserMailerContainer,
  UserMailerTitle,
} from "./user-articles.styles";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import { selectUserArticles } from "../../app/features/articles/articles.selector";
import { Article } from "../../app/features/articles/articles.slice";
import Button, { ButtonType } from "../button/button.component";
import Modal from "../modal/modal.component";
import { Offer } from "../../app/features/articles/articles.slice";
import { updateArticle } from "../../utils/firebase/firebase.utils";

type ArticleOffers = {
  articleOffers: Offer[];
  articleId: string;
};

function UserArticles() {
  const { userId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [offers, setOffers] = useState<ArticleOffers>({} as ArticleOffers);
  const [isOfferAccepted, setIsOfferAccepted] = useState<Boolean>(false);

  const articles = useAppSelector(selectUserArticles(userId as string));

  const closeModal = () => {
    setShowModal(false);
  };

  const getArticleWithOffers = (array: Article[]) => {
    let articlesOffers = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i].offers.length > 0) {
        articlesOffers.push(array[i]);
      }
    }

    return articlesOffers;
  };

  const handleOffers = (articleOffers: Offer[], articleId: string) => {
    setOffers({ articleOffers, articleId });
    setShowModal(true);
  };

  const rejectOffer = async (articleId: string, offerToRemove: Offer) => {
    const articleFound = articles.find((article) => article.id === articleId);

    if (articleFound) {
      const {
        articleName,
        category,
        description,
        imageUrls,
        price,
        userId,
        id,
      } = articleFound;

      const articleToUpdate = {
        articleName,
        category,
        description,
        imageUrls,
        price,
        userId,
        id,
        offers: articleFound.offers.filter((offer) => offer !== offerToRemove),
      };
      await updateArticle(articleToUpdate);
      closeModal();
    }
  };

  return (
    <UserArticlesWrapper>
      <h1>Vous avez de nouvelles offres sur les articles suivants :</h1>
      {getArticleWithOffers(articles).map((article) => {
        return (
          <UserArticle key={article.id}>
            <UserArticleImage>
              <img src={article.imageUrls[0]} alt={article.articleName} />
            </UserArticleImage>
            <UserArticleInfo>
              <span>Article : {article.articleName}</span>
              <span>Categorie : {article.category}</span>
              <span>Prix : {article.price}€</span>
              <span>Description : {article.description}</span>
            </UserArticleInfo>
            <Button
              onClick={() => {
                handleOffers(article.offers, article.id);
              }}
              buttonStyle={ButtonType.ButtonSubmit}
            >
              Voir les offres
            </Button>
          </UserArticle>
        );
      })}
      {offers.articleId && (
        <Modal
          show={showModal}
          title="Liste des offres"
          closeModal={closeModal}
        >
          <OfferContainer>
            {offers?.articleOffers.map((item) => {
              if (!isOfferAccepted) {
                return (
                  <OfferInfo key={item.message.from.userId}>
                    <div>
                      <span>
                        {item.message.from.name} à fait une offre à{" "}
                        {item.amount}
                        €.
                      </span>
                      <span>Message de l'acheteur : </span>
                      <span>{item.message.messageContent}</span>
                    </div>
                    <ModalButtonContainer>
                      <Button
                        onClick={() => setIsOfferAccepted(true)}
                        buttonStyle={ButtonType.ButtonSubmit}
                      >
                        Accepter l'offre
                      </Button>
                      <Button
                        onClick={() => rejectOffer(offers.articleId, item)}
                        buttonStyle={ButtonType.ButtonSubmit}
                      >
                        Refuser l'offre
                      </Button>
                    </ModalButtonContainer>
                  </OfferInfo>
                );
              }

              return (
                <OfferInfo key={item.message.from.userId}>
                  <UserMailerTitle>
                    Veuillez prendre contact avec l'acheteur à l'adresse
                    suivante :
                  </UserMailerTitle>
                  <UserMailerContainer>
                    {item.message.from.email}
                  </UserMailerContainer>
                </OfferInfo>
              );
            })}
          </OfferContainer>
        </Modal>
      )}
    </UserArticlesWrapper>
  );
}

export default UserArticles;
