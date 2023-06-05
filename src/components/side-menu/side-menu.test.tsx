import SideMenu from "./side-menu.component";
import { render, screen } from "@testing-library/react";
import { Article } from "../../app/features/articles/articles.slice";
import { Provider } from "react-redux";
import store from "../../app/store";

const CustomRender = () => {
  const article: Article = {
    articleName: "Bmx",
    category: "Vélo",
    description: "Bmx haut de gamme",
    imageUrls: ["image1.png", "image2.png"],
    price: "400",
    userId: "12345",
    id: "toto",
    offers: [],
  };

  return (
    <Provider store={store}>
      <SideMenu openModal={() => {}} article={article} />
    </Provider>
  );
};

describe("Side-menu", () => {
  test("renders correctly", () => {
    render(CustomRender());

    expect(screen.getByText("Bmx")).toBeInTheDocument();
    expect(screen.getByText("Bmx haut de gamme")).toBeInTheDocument();
    expect(screen.getByText("400€")).toBeInTheDocument();
  });
});
