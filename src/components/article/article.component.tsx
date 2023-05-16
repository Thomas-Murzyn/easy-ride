import { ArticleWrapper } from "./article.styles";
import { selectArticle } from "../../app/features/articles/articles.selector";
import { useAppSelector } from "../../app/hooks/hooks";
import { useParams } from "react-router-dom";
import Carousel from "../carousel/carousel.component";
import SideMenu from "../side-menu/side-menu.component";
import Modal from "../modal/modal.component";
import { useState, useEffect } from "react";
import FormField from "../form-input/form-field.component";
import { updateArticle } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../app/features/user/user.selector";

function Article() {
  const { id } = useParams();
  const article = useAppSelector(selectArticle(`${id}`));
  const user = useAppSelector(selectCurrentUser);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const handleFormFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const resetOffer = () => {
    setAmount("");
  };

  const handleSubmit = () => {
    if (user) {
      let articleToUpdate = { ...article };
      articleToUpdate.offers = [
        ...articleToUpdate.offers,
        { userId: user.userId, name: user.displayName, amount: Number(amount) },
      ];
      updateArticle(articleToUpdate);
      closeModal();
      resetOffer();
    }
  };

  if (article) {
    return (
      <ArticleWrapper>
        <Carousel
          articleName={article.articleName}
          images={article.imageUrls}
        />
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
              onChange={handleFormFields}
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
