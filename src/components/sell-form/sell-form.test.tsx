import SellForm from "./sell-form.component";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";

const mockStore = () => {
  return (
    <Provider store={store}>
      <SellForm />
    </Provider>
  );
};

describe("Sell-Form", () => {
  test("renders correctly", () => {
    render(mockStore());

    const sellFormHeading = screen.getByRole("heading", {
      name: /que souhaitez-vous vendre \?/i,
    });
    expect(sellFormHeading).toBeInTheDocument();

    const priceInput = screen.getByText("Prix");
    expect(priceInput).toBeInTheDocument();

    const descriptionInput = screen.getByText("Description");
    expect(descriptionInput).toBeInTheDocument();

    const categorieInput = screen.getByRole("button", { name: /categorie ​/i });
    expect(categorieInput).toBeInTheDocument();

    const fileInput = screen.getByText(/ajouter des photos/i);
    expect(fileInput).toBeInTheDocument();
  });
});
