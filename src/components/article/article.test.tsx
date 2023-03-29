import Article from "./article.component";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";

const customRender = () => {
  return (
    <Provider store={store}>
      <Article />
    </Provider>
  );
};

describe("Article", () => {
  test("affiche 'Loading...' tant que l'article est en train de charger", () => {
    render(customRender());
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("affiche le nom de l'article une fois qu'il est chargé", () => {
    render(customRender());
    // await loading data
    setTimeout(() => {
      return expect(screen.getByText(/nom de l'article/i)).toBeInTheDocument();
    }, 1000);
  });
});
