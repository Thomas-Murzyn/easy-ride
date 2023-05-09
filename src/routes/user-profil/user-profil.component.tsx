import {
  UserProfilContainer,
  UserNotificationLogo,
  UserButton,
} from "./user-profil.styles";
import { useAppSelector } from "../../app/hooks/hooks";
import { selectCurrentUser } from "../../app/features/user/user.selector";
import { selectUserArticles } from "../../app/features/articles/articles.selector";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

function UserProfil() {
  const user = useAppSelector(selectCurrentUser);
  const articles = useAppSelector(selectUserArticles(user?.userId as string));

  if (user && articles) {
    const offers = articles.filter((article) => {
      return article.offers.length > 0;
    });

    return (
      <UserProfilContainer>
        <h1>Bienvenue {user.displayName && user.displayName.split(" ")[0]}</h1>
        <UserButton>
          <StorefrontIcon />
          Vos articles
        </UserButton>

        <UserButton>
          <ShoppingCartIcon />
          Mes offres
          <UserNotificationLogo>{offers.length}</UserNotificationLogo>
        </UserButton>

        <UserButton>
          <LogoutIcon />
          Déconnexion
        </UserButton>
      </UserProfilContainer>
    );
  }

  return null;
}

export default UserProfil;
