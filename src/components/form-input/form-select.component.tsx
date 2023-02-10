import { SelectHTMLAttributes, FC } from "react";
import {
  Select,
  FormSelectGroup,
  CustomizedArrowDropDownCircleRoundedIcon,
} from "./form-select.styles";

type FormSelectProps = {
  label: string;
  categories?: string[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const FormSelect: FC<FormSelectProps> = ({
  label,
  categories,
  ...otherProps
}) => {
  return (
    <FormSelectGroup>
      <Select {...otherProps} id={otherProps.name}>
        <option>
          {otherProps.value === "" ? "Categories" : otherProps.value}
        </option>
        {categories?.map((categorie) => {
          return (
            <option value={categorie} key={categorie}>
              {categorie.toUpperCase()}
            </option>
          );
        })}
      </Select>
      <CustomizedArrowDropDownCircleRoundedIcon />
    </FormSelectGroup>
  );
};

export default FormSelect;
