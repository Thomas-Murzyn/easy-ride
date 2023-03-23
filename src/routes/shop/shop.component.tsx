import { ShopContainer } from "./shop.styles";
import StoreArticles from "../../components/store-articles/store-articles.component";

function Shop() {
  return (
    <ShopContainer data-testid="shop-component">
      <StoreArticles />
    </ShopContainer>
  );
}

export default Shop;
