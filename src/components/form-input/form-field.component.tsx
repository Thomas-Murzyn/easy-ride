import {
  FormGroup,
  Input,
  Label,
  LabelFile,
  InputFile,
  NameContainer,
  NamePicture,
  CustomClearRoundedIcon,
} from "./form-field.styles";
import { InputHTMLAttributes, FC } from "react";
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";

type FormInputProps = {
  label: string;
  imageNames?: string[];
  removeFile?: (file: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const FormField: FC<FormInputProps> = ({
  label,
  imageNames,
  removeFile,
  ...otherProps
}) => {
  if (otherProps.type === "file") {
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
                <NamePicture key={name}>
                  {name}{" "}
                  <CustomClearRoundedIcon
                    onClick={() => removeFile && removeFile(name)}
                  />
                </NamePicture>
              ))}
          </NameContainer>
        )}
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
