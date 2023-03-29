import Shop from "./shop.component";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import { BrowserRouter } from "react-router-dom";

const customRender = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    </Provider>
  );
};

describe("Shop", () => {
  test("renders correctly", () => {
    render(customRender());

    expect(screen.getByTestId("shop-component")).toBeInTheDocument();
  });
});
