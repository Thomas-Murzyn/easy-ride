import { SellFormContainer, FormSell } from "./sell-form.styles";
import FormField from "../form-input/form-field.component";
import { useState } from "react";
import { addItemToSell } from "../../utils/firebase/firebase.utils";
import Button, { ButtonType } from "../../components/button/button.component";
import { useAppSelector, useAppDispatch } from "../../app/hooks/hooks";
import { selectCurrentUser } from "../../app/features/user/user.selector";
import FormSelect from "../form-input/form-select.component";
import { fetchArticles } from "../../app/features/articles/articles.slice";

const defaultFormFields = {
  articleName: "",
  category: "",
  price: "",
  description: "",
};

const categories = [
  "vélo",
  "trotinnette",
  "rollers",
  "gyroroue",
  "squateboard",
];

function SellForm() {
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const userId = currentUser?.userId;
  const [images, setImages] = useState<Blob[]>([]);

  const [imageNames, setImageNames] = useState<string[]>([]);

  const [formField, setFormField] = useState(defaultFormFields);

  const { articleName, category, price, description } = formField;

  const resetFormField = () => {
    setFormField(defaultFormFields);
    setImages([]);
    setImageNames([]);
  };

  const uploadImage = async () => {
    const imageUrls: string[] = [];
    images.map(async (image, index) => {
      try {
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
        imageUrls.push(url);
        if (index === images.length - 1) {
          await addItemToSell(
            articleName,
            category,
            price,
            description,
            imageUrls,
            userId as string
          );
          dispatch(fetchArticles);
        }
      } catch (error) {
        console.error(error);
      }
    });
  };

  const handleImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      const newImages = [...images];
      newImages.push(files[0] as Blob);
      setImages(newImages);

      const newImageNames = [...imageNames];
      newImageNames.push(files[0].name);
      setImageNames(newImageNames);
    }
  };

  const handleFormFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSelectField = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target;

    setFormField({ ...formField, [name]: value });
  };

  const removeFile = (file: string) => {
    const newImagesArr = images.filter((image) => {
      const fileImage = image as File;
      return fileImage.name !== file;
    });
    const newImagesNamesArr = imageNames.filter((image) => image !== file);
    setImages(newImagesArr);
    setImageNames(newImagesNamesArr);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await uploadImage();
    resetFormField();
  };

  return (
    <SellFormContainer>
      <FormSell onSubmit={handleSubmit}>
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
        <FormSelect
          name="category"
          label="Categorie"
          required
          value={category}
          onChange={handleSelectField}
          categories={categories}
        />
        <FormField
          name="image"
          type="file"
          label="Ajouter des photos"
          removeFile={removeFile}
          required
          onChange={handleImageFile}
          imageNames={imageNames}
        />
        <Button type="submit" buttonStyle={ButtonType.ButtonSubmit}>
          Valider
        </Button>
      </FormSell>
    </SellFormContainer>
  );
}

export default SellForm;
