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
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Badge,
  Stack,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const StoreArticle = ({ article }: { article: Article }) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const currentUser = useAppSelector(selectCurrentUser);

  const goToArticle = () => {
    navigate(`${location}/article/${article.id}`);
  };

  if (article.offers.length > 0 && article.userId === currentUser?.userId) {
    return (
      <Box
        width={350}
        sx={{
          cursor: "pointer",
          "&:hover": {
            boxShadow: 4,
          },
        }}
        boxShadow={2}
      >
        <Card onClick={goToArticle}>
          <CardMedia
            component="img"
            image={article.imageUrls[0]}
            aria-label={article.articleName}
            height={200}
            sx={{
              objectFit: "fill",
            }}
          />
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Stack>
                <Typography variant="h6">{article.articleName}</Typography>
                <Typography variant="body1">Prix : {article.price}€</Typography>
              </Stack>
              <Badge color="error" badgeContent={article.offers.length}>
                <MailIcon />
              </Badge>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <Box
      width={350}
      sx={{
        cursor: "pointer",
        "&:hover": {
          boxShadow: 4,
        },
      }}
      boxShadow={2}
    >
      <Card onClick={goToArticle}>
        <CardMedia
          component="img"
          image={article.imageUrls[0]}
          aria-label={article.articleName}
          height={200}
          sx={{
            objectFit: "fill",
          }}
        />
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography variant="h6">{article.articleName}</Typography>
              <Typography variant="body1">Prix : {article.price}€</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StoreArticle;
