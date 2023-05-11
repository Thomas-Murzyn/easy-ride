import {
  UserProfilContainer,
  UserNotificationLogo,
  UserButton,
} from "./user-profil.styles";
import { useAppSelector, useAppDispatch } from "../../app/hooks/hooks";
import { selectCurrentUser } from "../../app/features/user/user.selector";
import { selectUserArticles } from "../../app/features/articles/articles.selector";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOutCurrentUser } from "../../app/features/user/user.slice";
import { useNavigate, Route, Routes } from "react-router-dom";
import { Article } from "../../app/features/articles/articles.slice";
import UserArticles from "../../components/user-articles/user-articles.component";

function UserProfil() {
  const user = useAppSelector(selectCurrentUser);
  const articles = useAppSelector(selectUserArticles(user?.userId as string));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(signOutCurrentUser());
    navigate("/sign-in");
  };

  if (user && articles) {
    const getOffers = (array: Article[]) => {
      let totalOffers = 0;

      for (let i = 0; i < array.length; i++) {
        if (array[i].offers.length > 0) {
          totalOffers += array[i].offers.length;
        }
      }

      return totalOffers;
    };

    return (
      <Routes>
        <Route
          index
          element={
            <UserProfilContainer>
              <h1>
                Bienvenue {user.displayName && user.displayName.split(" ")[0]}
              </h1>
              <UserButton onClick={() => navigate("/sell")}>
                <StorefrontIcon />
                Vos articles
              </UserButton>

              <UserButton
                onClick={() =>
                  navigate(`/user-profil/user-article/${user.userId}`)
                }
              >
                <ShoppingCartIcon />
                Mes offres
                <UserNotificationLogo>
                  {getOffers(articles)}
                </UserNotificationLogo>
              </UserButton>

              <UserButton onClick={signOut}>
                <LogoutIcon />
                Déconnexion
              </UserButton>
            </UserProfilContainer>
          }
        />
        <Route path="/user-article/:userId" element={<UserArticles />} />
      </Routes>
    );
  }

  return null;
}

export default UserProfil;
