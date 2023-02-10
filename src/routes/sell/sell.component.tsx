import SellForm from "../../components/sell-form/sell-form.component";
import { SellContainer } from "./sell.styles";
import UserStore from "../../components/user-store/user-store.component";

const Sell = () => {
  return (
    <SellContainer>
      <SellForm />
      <UserStore />
    </SellContainer>
  );
};

export default Sell;
