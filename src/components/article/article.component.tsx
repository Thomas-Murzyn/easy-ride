import { ArticleWrapper, CustomArticleBox } from "./article.styles";
import { selectArticle } from "../../app/features/articles/articles.selector";
import { useAppSelector } from "../../app/hooks/hooks";
import { useParams } from "react-router-dom";

import Modal from "../modal/modal.component";
import { useState, useEffect } from "react";
import {
  updateArticle,
  getUserInfo,
  UserData,
} from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../app/features/user/user.selector";

import {
  TextField,
  InputAdornment,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

function Article() {
  const { id } = useParams();
  const article = useAppSelector(selectArticle(`${id}`));
  const user = useAppSelector(selectCurrentUser);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const [message, setMessage] = useState("");
  const [articleOwner, setArticleOwner] = useState<UserData | null>(null);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    const getArticleOwner = async () => {
      const response = await getUserInfo(article.userId);
      setArticleOwner(response);
    };

    if (article) getArticleOwner();
  }, [article]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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

  const handleSubmit = () => {
    if (user) {
      let articleToUpdate = { ...article };
      articleToUpdate.offers = [
        ...articleToUpdate.offers,
        {
          amount: Number(amount),
          message: {
            from: {
              userId: user.userId,
              name: user.displayName,
              email: user.email,
            },
            messageContent: message,
            date: new Date().toUTCString(),
          },
        },
      ];
      updateArticle(articleToUpdate);
      closeModal();
      resetOffer();
    }
  };

  if (article && articleOwner) {
    const { articleName, description, imageUrls } = article;
    return (
      <ArticleWrapper>
        <CustomArticleBox>
          <Card>
            <CardMedia
              component="img"
              height={400}
              image={imageUrls[0]}
              sx={{
                objectFit: "fill",
              }}
              aria-label={articleName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {articleName}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {`Prix : ${article.price}€`}
              </Typography>
              {showInfo && (
                <Typography gutterBottom variant="body2">
                  {description}
                </Typography>
              )}
              {showInfo && (
                <Typography
                  gutterBottom
                  variant="body2"
                >{`Vendu par : ${articleOwner?.displayName}`}</Typography>
              )}
              {showInfo && (
                <Typography
                  gutterBottom
                  variant="body2"
                >{`Categorie : ${article.category}`}</Typography>
              )}
            </CardContent>
            <CardActions>
              {user?.userId !== article.userId && (
                <Button onClick={openModal}>Faire une offre</Button>
              )}
              <Button onClick={() => setShowInfo(!showInfo)}>
                Plus d'informations
              </Button>
            </CardActions>
          </Card>
        </CustomArticleBox>
        {isLoading && (
          <Modal
            title={"Faire une offre"}
            showModal={showModal}
            closeModal={closeModal}
            handleSubmit={handleSubmit}
          >
            <TextField
              type="number"
              label="Quel offre souhaitez-vous faire ?"
              required
              value={amount}
              onChange={handleAmount}
              InputProps={{
                endAdornment: <InputAdornment position="end">€</InputAdornment>,
              }}
              aria-label="Entrer votre offre"
            />
            <TextField
              type="text"
              label="Ecrire au vendeur"
              required
              value={message}
              onChange={handleMessage}
              multiline
              aria-label="Ecrire au vendeur"
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
