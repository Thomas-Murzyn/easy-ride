import { SideMenuContainer, SideMenuSection } from "./side-menu.styles";
import { Article } from "../../app/features/articles/articles.slice";
import Button from "../button/button.component";
import { ButtonType } from "../button/button.component";

function SideMenu(props: { article: Article }) {
  const article = props.article;
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
      <Button buttonStyle={ButtonType.BuyButton}>Faire une offre</Button>
    </SideMenuContainer>
  );
}

export default SideMenu;
