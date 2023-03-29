import { ArticleWrapper } from "./article.styles";
import { selectArticle } from "../../app/features/articles/articles.selector";
import { useAppSelector } from "../../app/hooks/hooks";
import { useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();
  const article = useAppSelector(selectArticle(`${id}`));

  if (article) {
    return (
      <ArticleWrapper>
        <div>{article.articleName}</div>
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
