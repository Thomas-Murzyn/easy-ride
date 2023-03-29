import { ShopContainer } from "./shop.styles";
import StoreArticles from "../../components/store-articles/store-articles.component";
import { Routes, Route } from "react-router-dom";
import Article from "../../components/article/article.component";

function Shop() {
  return (
    <Routes>
      <Route
        index
        element={
          <ShopContainer data-testid="shop-component">
            <StoreArticles />
          </ShopContainer>
        }
      />
      <Route path="/article/:id" element={<Article />} />
    </Routes>
  );
}

export default Shop;
