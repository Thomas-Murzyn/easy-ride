import { ArticleWrapper } from "./article.styles";
import { selectArticle } from "../../app/features/articles/articles.selector";
import { useAppSelector } from "../../app/hooks/hooks";
import { useParams } from "react-router-dom";
import Carousel from "../carousel/carousel.component";
import SideMenu from "../side-menu/side-menu.component";
import Modal from "../modal/modal.component";
import { useState } from "react";
import FormField from "../form-input/form-field.component";

function Article() {
  const { id } = useParams();
  const article = useAppSelector(selectArticle(`${id}`));
  const [show, setShow] = useState(false);
  const [offer, setOffer] = useState("");

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const handleFormFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOffer(e.target.value);
  };

  const resetOffer = () => {
    setOffer("");
  };

  const handleSubmit = () => {
    closeModal();
    resetOffer();
  };

  if (article) {
    return (
      <ArticleWrapper>
        <Carousel
          articleName={article.articleName}
          images={article.imageUrls}
        />
        <SideMenu openModal={openModal} article={article} />
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
            value={offer}
            onChange={handleFormFields}
          />
        </Modal>
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
