import { FormGroup, Input, Label } from "./form-field.styles";
import { InputHTMLAttributes, FC } from "react";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormField: FC<FormInputProps> = ({ label, ...otherProps }) => {
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
