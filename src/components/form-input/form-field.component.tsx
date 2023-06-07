import {
  FormGroup,
  LabelFile,
  InputFile,
  NameContainer,
  NamePicture,
  CustomClearRoundedIcon,
  ErrorMessageWrapper,
} from "./form-field.styles";
import { InputHTMLAttributes, FC } from "react";
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";
import { generateUniqueId } from "../../utils/firebase/firebase.utils";

type FormInputProps = {
  label: string;
  imageNames?: string[];
  error: Boolean;
  removeFile?: (file: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const FormField: FC<FormInputProps> = ({
  label,
  imageNames,
  removeFile,
  error,
  ...otherProps
}) => {
  return (
    <FormGroup file>
      <LabelFile htmlFor={otherProps.name}>
        {label}
        <AddAPhotoRoundedIcon fontSize="large" />
        <InputFile
          data-testid="form-input-file"
          id={otherProps.name}
          {...otherProps}
        />
      </LabelFile>
      {imageNames && imageNames?.length > 0 && (
        <NameContainer>
          {imageNames &&
            imageNames.map((name) => (
              <NamePicture key={generateUniqueId()}>
                {name}{" "}
                <CustomClearRoundedIcon
                  onClick={() => removeFile && removeFile(name)}
                />
              </NamePicture>
            ))}
        </NameContainer>
      )}
      {error && (
        <ErrorMessageWrapper>
          <p>Veuillez ajouter au moins une photo.</p>
        </ErrorMessageWrapper>
      )}
    </FormGroup>
  );
};

export default FormField;
