import { HomeContainer, ButtonContainer, HomeWrapper } from "./home.styles";
import { CustomHomeButton } from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HomeWrapper>
        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
          Simplifier vos déplacements
        </Typography>
        <ButtonContainer>
          <CustomHomeButton size="large" onClick={() => navigate("/shop")}>
            Acheter
          </CustomHomeButton>
          <CustomHomeButton size="large" onClick={() => navigate("/sell")}>
            Vendre
          </CustomHomeButton>
        </ButtonContainer>
      </HomeWrapper>
    </HomeContainer>
  );
}

export default Home;
