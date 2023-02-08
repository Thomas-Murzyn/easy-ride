import { SellContainer, SellForm } from "./sell.styles";
import FormField from "../../components/form-input/form-field.component";
import { useState } from "react";
import { addItemToSell } from "../../utils/firebase/firebase.utils";
import Button, { ButtonType } from "../../components/button/button.component";

const defaultFormFields = {
  articleName: "",
  category: "",
  price: "",
  description: "",
  // image
};

function Sell() {
  const [formField, setFormField] = useState(defaultFormFields);
  const { articleName, category, price, description } = formField;

  const handleFormFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addItemToSell(articleName, category, price, description);
  };

  return (
    <SellContainer onSubmit={handleSubmit}>
      <SellForm>
        <FormField
          name="articleName"
          type="text"
          label="Nom de l'article"
          required
          value={articleName}
          onChange={handleFormFields}
        />
        <FormField
          name="category"
          type="text"
          label="Categorie"
          required
          value={category}
          onChange={handleFormFields}
        />
        <FormField
          name="price"
          type="number"
          label="Prix"
          required
          value={price}
          onChange={handleFormFields}
        />
        <FormField
          name="description"
          type="text"
          label="Description"
          required
          value={description}
          onChange={handleFormFields}
        />
        <Button type="submit" buttonStyle={ButtonType.ButtonSubmit}>
          Valider
        </Button>
      </SellForm>
    </SellContainer>
  );
}

export default Sell;
