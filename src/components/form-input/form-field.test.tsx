import FormField from "./form-field.component";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Form field", () => {
  const handleFormFields = jest.fn();
  test("renders correctly", () => {
    render(
      <FormField
        name="articleName"
        type="text"
        label="Nom de l'article"
        required
        onChange={handleFormFields}
      />
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();

    const labelElement = screen.getByText("Nom de l'article");
    expect(labelElement).toBeInTheDocument();
  });

  test("call onChange function", () => {
    render(
      <FormField
        name="articleName"
        type="text"
        label="Nom de l'article"
        required
        onChange={handleFormFields}
      />
    );

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "a" } });
    expect(handleFormFields).toHaveBeenCalledTimes(1);
  });

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

  //   test("Call remove file function", () => {
  //     const imagesNames = ["test1", "test2"];

  //     const removeFile = jest.fn();

  //     render(
  //       <FormField
  //         name="articleName"
  //         type="file"
  //         label="Nom de l'article"
  //         required
  //         onChange={handleFormFields}
  //         imageNames={imagesNames}
  //         removeFile={removeFile}
  //       />
  //     );

  //     fireEvent.click(screen.getByTestId("AddAPhotoRoundedIcon"));
  //     expect(removeFile).toHaveBeenCalledTimes(1);
  //   });
});
