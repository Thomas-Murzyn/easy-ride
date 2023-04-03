import {
  ArticleWrapper,
  ArticlePictureContainer,
  PictureContainer,
} from "./article.styles";
import { selectArticle } from "../../app/features/articles/articles.selector";
import { useAppSelector } from "../../app/hooks/hooks";
import { useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();
  const article = useAppSelector(selectArticle(`${id}`));

  const generateImagesContainers = (images: string[]) => {
    if (images.length >= 3) {
      // eslint-disable-next-line
      return images.map((image, index) => {
        if (index === 0) {
          return (
            <PictureContainer wsize={"40%"} hsize={"40%"}>
              <img src={images[index]} alt={article.articleName} />
            </PictureContainer>
          );
        }

        if (index === 1 || index === 2) {
          return (
            <PictureContainer wsize={"20%"} hsize={"20%"}>
              <img src={images[index]} alt={article.articleName} />
            </PictureContainer>
          );
        }
      });
    }

    if (images.length === 2) {
      // eslint-disable-next-line
      return images.map((image, index) => {
        if (index === 0) {
          return (
            <PictureContainer wsize={"40%"} hsize={"40%"}>
              <img src={images[index]} alt={article.articleName} />
            </PictureContainer>
          );
        }

        if (index === 1) {
          return (
            <PictureContainer wsize={"40%"} hsize={"40%"}>
              <img src={images[index]} alt={article.articleName} />
            </PictureContainer>
          );
        }
      });
    }

    if (images.length === 1) {
      return images.map((image, index) => {
        return (
          <PictureContainer wsize={"100%"} hsize={"100%"}>
            <img src={article.imageUrls[index]} alt={article.articleName} />
          </PictureContainer>
        );
      });
    }
  };

  if (article) {
    return (
      <ArticleWrapper>
        <ArticlePictureContainer>
          {generateImagesContainers(article.imageUrls)}
        </ArticlePictureContainer>
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
