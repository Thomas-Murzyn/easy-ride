import {
  SideMenuContainer,
  SideMenuSection,
  SideMenuSectionWrapper,
} from "./side-menu.styles";
import { Article } from "../../app/features/articles/articles.slice";
import Button from "../button/button.component";
import { ButtonType } from "../button/button.component";
import { selectCurrentUser } from "../../app/features/user/user.selector";
import { useAppSelector } from "../../app/hooks/hooks";
import { getUserInfo, UserData } from "../../utils/firebase/firebase.utils";
import { useEffect, useState } from "react";

export type SideMenuProps = {
  openModal: () => void;
  article: Article;
};

function SideMenu({ article, openModal }: SideMenuProps) {
  const { articleName, description, price } = article;
  const [articleOwner, setArticleOwner] = useState<UserData | null>(null);

  const currentUSer = useAppSelector(selectCurrentUser);

  useEffect(() => {
    const getArticleOwner = async () => {
      const response = await getUserInfo(article.userId);
      setArticleOwner(response);
    };

    getArticleOwner();
  }, [article.userId]);

  return (
    <SideMenuContainer>
      <SideMenuSectionWrapper>
        <SideMenuSection>
          <span>
            Vendu par : <br /> {articleOwner?.displayName}
          </span>
        </SideMenuSection>
        <SideMenuSection>
          <span>{articleName}</span>
        </SideMenuSection>
        <SideMenuSection>
          <span>{price}€</span>
        </SideMenuSection>
        <SideMenuSection>
          <span>{description}</span>
        </SideMenuSection>
      </SideMenuSectionWrapper>

      {currentUSer?.userId !== article.userId && (
        <Button onClick={openModal} buttonStyle={ButtonType.ButtonSubmit}>
          Faire une offre
        </Button>
      )}
    </SideMenuContainer>
  );
}

export default SideMenu;
