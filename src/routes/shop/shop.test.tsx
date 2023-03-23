import Shop from "./shop.component";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";

describe("Shop", () => {
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <Shop />
      </Provider>
    );

    expect(screen.getByTestId("shop-component")).toBeInTheDocument();
  });
});
