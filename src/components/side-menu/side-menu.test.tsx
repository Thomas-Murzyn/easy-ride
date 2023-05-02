import SideMenu from "./side-menu.component";
import { render, screen } from "@testing-library/react";
import { Article } from "../../app/features/articles/articles.slice";

describe("Side-menu", () => {
  const article: Article = {
    articleName: "Bmx",
    category: "Vélo",
    description: "Bmx haut de gamme",
    imageUrls: ["image1.png", "image2.png"],
    price: "400",
    userId: "12345",
    id: "toto",
  };

  test("renders correctly", () => {
    render(<SideMenu openModal={() => {}} article={article} />);

    expect(screen.getByText("Bmx")).toBeInTheDocument();
    expect(screen.getByText("Bmx haut de gamme")).toBeInTheDocument();
    expect(screen.getByText("400€")).toBeInTheDocument();
  });
});
