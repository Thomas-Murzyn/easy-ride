import {
  FormGroup,
  Input,
  Label,
  LabelFile,
  InputFile,
  NameContainer,
} from "./form-field.styles";
import { InputHTMLAttributes, FC } from "react";
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";

type FormInputProps = {
  label: string;
  imageNames?: string[];
} & InputHTMLAttributes<HTMLInputElement>;

const FormField: FC<FormInputProps> = ({
  label,
  imageNames,
  ...otherProps
}) => {
  if (otherProps.type === "file") {
    return (
      <FormGroup file>
        <LabelFile htmlFor={otherProps.name}>
          {label}
          <AddAPhotoRoundedIcon fontSize="large" />
          <InputFile id={otherProps.name} {...otherProps} />
        </LabelFile>
        <NameContainer>
          {imageNames &&
            imageNames.map((name) => <span key={name}>{name}</span>)}
        </NameContainer>
      </FormGroup>
    );
  }

  return (
    <FormGroup>
      <Input {...otherProps} />
      <Label
        shrink={Boolean(
          otherProps.value &&
            typeof otherProps.value === "string" &&
            otherProps.value.length
        )}
        htmlFor={otherProps.name}
      >
        {label}
      </Label>
    </FormGroup>
  );
};

export default FormField;
