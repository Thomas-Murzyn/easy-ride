import { SellContainer, SellForm } from "./sell.styles";
import FormField from "../../components/form-input/form-field.component";
import { useState } from "react";

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

  return (
    <SellContainer>
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
      </SellForm>
    </SellContainer>
  );
}

export default Sell;
