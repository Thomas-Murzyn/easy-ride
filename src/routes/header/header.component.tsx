import { HeaderContainer, NavLink, LogoContainer } from "./header.styles";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/easyRide_logo.png";
import { selectCurrentUser } from "../../app/features/user/user.selector";
import { useAppSelector } from "../../app/hooks/hooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/material";

function Header() {
  const user = useAppSelector(selectCurrentUser);

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <img src={Logo} alt="logo easyRide" />
        </LogoContainer>

        <Stack direction="row" alignItems="center">
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
        </Stack>
      </HeaderContainer>
      <Outlet data-testid="outlet-component" />
    </>
  );
}

export default Header;
