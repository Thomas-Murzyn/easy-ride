import UserStoreArticles from "./user-articles-store.component";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";

describe("User Store Articles", () => {
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <UserStoreArticles />
      </Provider>
    );
    const userArticlesHeading = screen.getByRole("heading", {
      name: "Vos articles",
    });
    expect(userArticlesHeading).toBeInTheDocument();
  });
});
