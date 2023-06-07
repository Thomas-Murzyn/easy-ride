import FormField from "./form-field.component";
import { render, screen } from "@testing-library/react";

describe("Form field", () => {
  const handleFormFields = jest.fn();

  test("renders correctly with file type", () => {
    const imagesNames = ["test1", "test2"];

    render(
      <FormField
        name="articleName"
        type="file"
        label="Nom de l'article"
        required
        onChange={handleFormFields}
        imageNames={imagesNames}
        error={false}
      />
    );

    const inputElement = screen.getByTestId("form-input-file");
    expect(inputElement).toBeInTheDocument();

    const labelElement = screen.getByText("Nom de l'article");
    expect(labelElement).toBeInTheDocument();

    const imageName1 = screen.getByText("test1");
    expect(imageName1).toBeInTheDocument();

    const imageName2 = screen.getByText("test2");
    expect(imageName2).toBeInTheDocument();

    const clearIcon = screen.getByTestId("AddAPhotoRoundedIcon");
    expect(clearIcon).toBeInTheDocument();
  });
});
