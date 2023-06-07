import Home from "./home.component";
import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

// Mock useNavigate hook
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Home", () => {
  test("Home renders correctly", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Simplifier vos déplacements/i,
    });
    expect(heading).toBeInTheDocument();

    const shopButton = screen.getByRole("button", { name: /acheter/i });
    expect(shopButton).toBeInTheDocument();

    const sellButton = screen.getByRole("button", { name: /vendre/i });
    expect(sellButton).toBeInTheDocument();
  });

  test('should navigate to "/shop" when "Acheter" button is clicked', () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);
    render(<Home />);
    const acheterButton = screen.getByText("Acheter");
    fireEvent.click(acheterButton);
    expect(navigate).toHaveBeenCalledWith("/shop");
  });

  test('should navigate to "/sell" when "Vendre" button is clicked', () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);
    render(<Home />);
    const vendreButton = screen.getByText("Vendre");
    fireEvent.click(vendreButton);
    expect(navigate).toHaveBeenCalledWith("/sell");
  });
});
