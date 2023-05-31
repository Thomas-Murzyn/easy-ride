import { ArticleWrapper, ArticleImageWrapper } from "./article.styles";
import { selectArticle } from "../../app/features/articles/articles.selector";
import { useAppSelector } from "../../app/hooks/hooks";
import { useParams } from "react-router-dom";
import Carousel from "../carousel/carousel.component";
import SideMenu from "../side-menu/side-menu.component";
import Modal from "../modal/modal.component";
import { useState, useEffect } from "react";
import FormField from "../form-input/form-field.component";
import { Message, sendMessage } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../app/features/user/user.selector";

function Article() {
  const { id } = useParams();
  const article = useAppSelector(selectArticle(`${id}`));
  const user = useAppSelector(selectCurrentUser);

  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const resetOffer = () => {
    setAmount("");
    setMessage("");
  };

  const handleSubmit = async () => {
    if (user) {
      const messageToSend: Message = {
        article: article,
        from: {
          name: user.displayName,
          email: user.email,
          userId: user.userId,
        },
        date: new Date().toUTCString(),
        messageContent: message,
      };
      await sendMessage(messageToSend);
      // Call a send message function here
      closeModal();
      resetOffer();
    }
  };

  if (article) {
    return (
      <ArticleWrapper>
        <ArticleImageWrapper>
          <Carousel
            articleName={article.articleName}
            images={article.imageUrls}
          />
        </ArticleImageWrapper>
        <SideMenu openModal={openModal} article={article} />
        {isLoading && (
          <Modal
            title={"Faire une offre"}
            show={show}
            closeModal={closeModal}
            handleSubmit={handleSubmit}
          >
            <FormField
              name="offer"
              type="number"
              label="Quel offre souhaitez-vous faire ?"
              required
              value={amount}
              onChange={handleAmount}
            />
            <FormField
              name="message"
              type="text"
              label="Ecrire au vendeur"
              required
              value={message}
              onChange={handleMessage}
            />
          </Modal>
        )}
      </ArticleWrapper>
    );
  }
  return (
    <ArticleWrapper>
      <div>Loading...</div>
    </ArticleWrapper>
  );
}

export default Article;
