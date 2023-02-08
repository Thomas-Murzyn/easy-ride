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
};

function Sell() {
  const [image, setImage] = useState<Blob>({} as Blob);
  const [imageNames, setImageNames] = useState<string[]>([]);

  const [formField, setFormField] = useState(defaultFormFields);

  const { articleName, category, price, description } = formField;

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "murzynt");
    data.append("cloud_name", "dkwgtzzxc");
    const response = await fetch(
      "  https://api.cloudinary.com/v1_1/dkwgtzzxc/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const { url } = await response.json();
    await addItemToSell(articleName, category, price, description, url);
  };

  const handleImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      const newArr = [...imageNames];
      newArr.push(files[0].name);
      setImageNames(newArr);
      setImage(files[0] as Blob);
    }
  };

  const handleFormFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await uploadImage();
  };

  return (
    <SellContainer onSubmit={handleSubmit}>
      <SellForm>
        <h2>Que souhaitez-vous vendre ?</h2>
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
        <FormField
          name="image"
          type="file"
          label="Ajouter des photos"
          required
          onChange={handleImageFile}
          imageNames={imageNames}
        />
        <Button type="submit" buttonStyle={ButtonType.ButtonSubmit}>
          Valider
        </Button>
      </SellForm>
    </SellContainer>
  );
}

export default Sell;
