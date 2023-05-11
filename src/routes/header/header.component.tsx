import {
  HeaderContainer,
  NavigationContainer,
  NavLink,
  LogoContainer,
} from "./header.styles";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/easyRide_logo.png";
import { selectCurrentUser } from "../../app/features/user/user.selector";
import { useAppSelector } from "../../app/hooks/hooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  const user = useAppSelector(selectCurrentUser);

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
          {user?.displayName ? (
            <NavLink to="/user-profil" data-testid="sign-in">
              <AccountCircleIcon fontSize="large" />
            </NavLink>
          ) : (
            <NavLink to="/sign-in" data-testid="sign-in">
              Se connecter
            </NavLink>
          )}
        </NavigationContainer>
      </HeaderContainer>
      <Outlet data-testid="outlet-component" />
    </>
  );
}

export default Header;
