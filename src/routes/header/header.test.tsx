import Header from "./header.component";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Logo from "../../assets/easyRide_logo.png";

describe("Header", () => {
  test("renders correctly", () => {
    render(<Header />, {
      wrapper: BrowserRouter,
    });
    const logo: HTMLImageElement = screen.getByRole("img", {
      name: /logo easyride/i,
    });

    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain(Logo);

    const navLinks = screen.getAllByRole("link");
    expect(navLinks.length).toEqual(4);
  });

  test("renders the navigation links correctly", () => {
    render(<Header />, {
      wrapper: BrowserRouter,
    });
    const homeLinkElement = screen.getByText("Accueil");
    const shopLinkElement = screen.getByText("Acheter");
    const sellLinkElement = screen.getByText("Vendre");
    const signInLinkElement = screen.getByText("Se connecter");
    expect(homeLinkElement).toHaveAttribute("href", "/");
    expect(shopLinkElement).toHaveAttribute("href", "/shop");
    expect(sellLinkElement).toHaveAttribute("href", "/sell");
    expect(signInLinkElement).toHaveAttribute("href", "/sign-in");
  });
});
