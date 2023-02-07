import {
  HeaderContainer,
  NavigationContainer,
  NavLink,
  LogoContainer,
} from "./header.styles";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/easyRide_logo.png";

function Header() {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <img src={Logo} alt="logo easyRide" />
        </LogoContainer>

        <NavigationContainer>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/shop">Acheter</NavLink>
          <NavLink to="/sell">Vendre</NavLink>
          <NavLink to="/sign-in">Se connecter</NavLink>
        </NavigationContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
}

export default Header;
