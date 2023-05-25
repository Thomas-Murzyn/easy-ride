import {
  UserArticlesWrapper,
  UserArticle,
  UserArticleImage,
  UserArticleInfo,
  OfferInfo,
  OfferContainer,
} from "./user-articles.styles";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import { selectUserArticles } from "../../app/features/articles/articles.selector";
import { Article } from "../../app/features/articles/articles.slice";
import Button, { ButtonType } from "../button/button.component";
import Modal from "../modal/modal.component";
import { Offer } from "../../app/features/articles/articles.slice";
import FormField from "../form-input/form-field.component";

function UserArticles() {
  const { userId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [offers, setOffers] = useState<Offer[]>();
  const [isOfferActepted, setIsOfferActepted] = useState(false);
  const [message, setMessage] = useState("");

  const articles = useAppSelector(selectUserArticles(userId as string));

  const closeModal = () => {
    setIsOfferActepted(false);
    setShowModal(false);
  };

  const accectOffer = () => {
    setIsOfferActepted(true);
  };

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
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

  const handleOffers = (articleOffers: Offer[]) => {
    setOffers(articleOffers);
    setShowModal(true);
  };

  const submitOffer = () => {
    // Call a firebase function to send a message to the shopper
    console.log("Submit offer; message : " + message);
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
                handleOffers(article.offers);
              }}
              buttonStyle={ButtonType.ButtonSubmit}
            >
              Voir les offres
            </Button>
          </UserArticle>
        );
      })}
      <Modal
        handleSubmit={submitOffer}
        show={showModal}
        title="Liste des offres"
        closeModal={closeModal}
      >
        <OfferContainer>
          {offers?.map((item) => {
            if (!isOfferActepted) {
              return (
                <OfferInfo key={item.userId}>
                  <div>
                    <span>
                      {item.name} à fait une offre à {item.amount}€.
                    </span>
                    <span>Message de l'acheteur : </span>
                    <span>{item?.message}</span>
                  </div>
                  <div>
                    <Button
                      onClick={accectOffer}
                      buttonStyle={ButtonType.ButtonSubmit}
                    >
                      Accepter l'offre
                    </Button>
                  </div>
                </OfferInfo>
              );
            }

            return (
              <OfferInfo key={item.userId}>
                <FormField
                  name="message"
                  type="text"
                  label="Envoyer un message à l'acheteur"
                  required
                  value={message}
                  onChange={handleMessage}
                />
                <Button
                  onClick={submitOffer}
                  buttonStyle={ButtonType.ButtonSubmit}
                >
                  Soumettre l'offre
                </Button>
              </OfferInfo>
            );
          })}
        </OfferContainer>
      </Modal>
    </UserArticlesWrapper>
  );
}

export default UserArticles;
