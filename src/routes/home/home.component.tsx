import { HomeContainer, ButtonContainer } from "./home.styles";
import Button, { ButtonType } from "../../components/button/button.component";

function Home() {
  return (
    <HomeContainer>
      <h1>Vendez vos vieux vélos en toutes simplicité</h1>
      <ButtonContainer>
        <Button buttonStyle={ButtonType.ButtonHome}>Acheter</Button>
        <Button buttonStyle={ButtonType.ButtonHome}>Vendre</Button>
      </ButtonContainer>
    </HomeContainer>
  );
}

export default Home;
