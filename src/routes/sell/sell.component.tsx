import SellForm from "../../components/sell-form/sell-form.component";
import { SellContainer } from "./sell.styles";
import UserStoreArticles from "../../components/user-articles-store/user-articles-store.component";

const Sell = () => {
  return (
    <SellContainer>
      <SellForm />
      <UserStoreArticles />
    </SellContainer>
  );
};

export default Sell;
