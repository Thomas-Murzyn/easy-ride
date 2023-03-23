import StoreArticles from "./store-articles.component";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";

describe("Store articles", () => {
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <StoreArticles />
      </Provider>
    );
    expect(screen.getByText("Category")).toBeInTheDocument();
  });
});
