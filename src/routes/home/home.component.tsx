import { HomeContainer, ButtonContainer } from "./home.styles";
import Button, { ButtonType } from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <h1>Vendez vos vieux vélos en toutes simplicité</h1>
      <ButtonContainer>
        <Button
          onClick={() => navigate("/shop")}
          buttonStyle={ButtonType.ButtonHome}
        >
          Acheter
        </Button>
        <Button
          onClick={() => navigate("/sell")}
          buttonStyle={ButtonType.ButtonHome}
        >
          Vendre
        </Button>
      </ButtonContainer>
    </HomeContainer>
  );
}

export default Home;
