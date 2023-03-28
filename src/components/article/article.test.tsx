import Article from "./article.component";
import { render, screen } from "@testing-library/react";

describe("Article", () => {
  test("renders correctly", () => {
    render(<Article />);

    expect(screen.getByText("Article")).toBeInTheDocument();
  });
});
