import Home from "./home.component";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  test("Home renders correctly", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /vendez vos vieux vélos en toutes simplicité/i,
    });
    expect(heading).toBeInTheDocument();

    const shopButton = screen.getByRole("button", { name: /acheter/i });
    expect(shopButton).toBeInTheDocument();

    const sellButton = screen.getByRole("button", { name: /vendre/i });
    expect(sellButton).toBeInTheDocument();
  });
});
