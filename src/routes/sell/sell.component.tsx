import SellForm from "../../components/sell-form/sell-form.component";
import { SellContainer } from "./sell.styles";
import UserStoreArticles from "../../components/user-articles-store/user-articles-store.component";
import { Routes, Route } from "react-router-dom";
import Article from "../../components/article/article.component";

const Sell = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <SellContainer data-testid="sell-component">
            <SellForm />
            <UserStoreArticles />
          </SellContainer>
        }
      />
      <Route path="*" element={<Article />} />
    </Routes>
  );
};

export default Sell;
