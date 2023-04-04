import { ArticleWrapper } from "./article.styles";
import { selectArticle } from "../../app/features/articles/articles.selector";
import { useAppSelector } from "../../app/hooks/hooks";
import { useParams } from "react-router-dom";
import Carousel from "../carousel/carousel.component";
import SideMenu from "../side-menu/side-menu.component";

function Article() {
  const { id } = useParams();
  const article = useAppSelector(selectArticle(`${id}`));

  if (article) {
    return (
      <ArticleWrapper>
        <Carousel
          articleName={article.articleName}
          images={article.imageUrls}
        />
        <SideMenu article={article} />
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
