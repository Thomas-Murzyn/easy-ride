import { SellFormContainer, FormSell } from "./sell-form.styles";
import FormField from "../form-input/form-field.component";
import { useState, useEffect } from "react";
import {
  addItemToSell,
  generateUniqueId,
} from "../../utils/firebase/firebase.utils";
import { CustomButton } from "../../components/button/button.component";
import { useAppSelector, useAppDispatch } from "../../app/hooks/hooks";
import { selectCurrentUser } from "../../app/features/user/user.selector";
import { fetchArticles } from "../../app/features/articles/articles.slice";
import { TextField, MenuItem } from "@mui/material";

const defaultFormFields = {
  articleName: "",
  category: "",
  price: "",
  description: "",
};

export const categories = [
  "VELO",
  "TROTTINETTE",
  "ROLLERS",
  "GYROROUE",
  "SQUATEBOARD",
];

function SellForm() {
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const userId = currentUser?.userId;
  const [images, setImages] = useState<Blob[]>([]);

  const [imageNames, setImageNames] = useState<string[]>([]);
  const [imageError, setImageError] = useState(false);
  const [formField, setFormField] = useState(defaultFormFields);

  const { articleName, category, price, description } = formField;

  const resetFormField = () => {
    setFormField(defaultFormFields);
    setImages([]);
    setImageNames([]);
  };

  const uploadImage = () => {
    const processImageUpload: Promise<string[]> = new Promise(
      (resolve, reject) => {
        const imageUrls: string[] = [];
        // eslint-disable-next-line
        images.map((image, index) => {
          const data = new FormData();
          data.append("file", image);
          data.append("upload_preset", "murzynt");
          data.append("cloud_name", "dkwgtzzxc");
          fetch("  https://api.cloudinary.com/v1_1/dkwgtzzxc/image/upload", {
            method: "post",
            body: data,
          })
            .then((response) => {
              response.json().then((response) => {
                const { url } = response;
                imageUrls.push(url);
                if (index === images.length - 1) resolve(imageUrls);
              });
            })
            .catch((error) => {
              reject("Failed to upload image.");
            });
        });
      }
    );

    processImageUpload.then((result) => {
      const imageUrls = [...result];

      addItemToSell(
        articleName,
        category,
        price,
        description,
        imageUrls,
        userId as string
      );
      dispatch(fetchArticles);
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
      setImageError(false);
    }
  };

  const handleFormFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSelectField = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    if (images.length === 0) {
      setImageError(true);
      return;
    }
    uploadImage();
    resetFormField();
  };

  return (
    <SellFormContainer>
      <FormSell onSubmit={handleSubmit}>
        <h2>Que souhaitez-vous vendre ?</h2>
        <TextField
          name="articleName"
          type="text"
          label="Nom de l'article"
          required
          value={articleName}
          onChange={handleFormFields}
          aria-label="Ecrire le nom de l'article"
        />

        <TextField
          name="price"
          type="number"
          label="Prix"
          required
          value={price}
          onChange={handleFormFields}
          aria-label="Taper le prix de l'article"
        />
        <TextField
          name="description"
          type="text"
          label="Description"
          required
          value={description}
          onChange={handleFormFields}
          multiline
          minRows={2}
          aria-label="Ecrire une déscription de l'article"
        />
        <TextField
          name="category"
          label="Categorie"
          select
          required
          value={category}
          onChange={handleSelectField}
          fullWidth
        >
          {categories.map((category) => {
            return (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            );
          })}
        </TextField>
        <FormField
          key={generateUniqueId()}
          name="image"
          type="file"
          label="Ajouter des photos"
          removeFile={removeFile}
          onChange={handleImageFile}
          imageNames={imageNames}
          error={imageError}
        />
        <CustomButton type="submit">Valider</CustomButton>
      </FormSell>
    </SellFormContainer>
  );
}

export default SellForm;
