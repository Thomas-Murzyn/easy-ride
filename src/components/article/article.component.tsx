import { ArticleWrapper } from "./article.styles";
import { selectArticle } from "../../app/features/articles/articles.selector";
import { useAppSelector } from "../../app/hooks/hooks";

function Article() {
  const article = useAppSelector(selectArticle("4nHQwnr7Ejz0XHU8dY45"));

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
