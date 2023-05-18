import { SideMenuContainer, SideMenuSection } from "./side-menu.styles";
import { Article } from "../../app/features/articles/articles.slice";
import Button from "../button/button.component";
import { ButtonType } from "../button/button.component";
import React from "react";

export type SideMenuProps = {
  openModal: () => void;
  article: Article;
};

function SideMenu({ article, openModal }: SideMenuProps) {
  const { articleName, description, price } = article;
  return (
    <SideMenuContainer>
      <SideMenuSection>
        <span>{articleName}</span>
      </SideMenuSection>
      <SideMenuSection>
        <span>{price}€</span>
      </SideMenuSection>
      <SideMenuSection>
        <span>{description}</span>
      </SideMenuSection>
      <SideMenuSection>
        <Button onClick={openModal} buttonStyle={ButtonType.BuyButton}>
          Faire une offre
        </Button>
      </SideMenuSection>
    </SideMenuContainer>
  );
}

export default SideMenu;
