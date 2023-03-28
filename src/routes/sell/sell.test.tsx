import Sell from "./sell.component";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import { BrowserRouter } from "react-router-dom";

const customRender = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Sell />
      </BrowserRouter>
    </Provider>
  );
};

describe("Sell", () => {
  test("renders correctly", () => {
    render(customRender());
    const sellComponent = screen.getByTestId("sell-component");
    expect(sellComponent).toBeInTheDocument();
  });

  test("sell-form is render correctly by sell component", () => {
    render(customRender());

    const sellFormHeading = screen.getByRole("heading", {
      name: /que souhaitez-vous vendre \?/i,
    });
    expect(sellFormHeading).toBeInTheDocument();
  });

  test("user-articles-store is render correctly by sell component", () => {
    render(customRender());

    const userArticlesHeading = screen.getByRole("heading", {
      name: /vos articles/i,
    });
    expect(userArticlesHeading).toBeInTheDocument();
  });
});
