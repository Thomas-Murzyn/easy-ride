import { HomeButton, SubmitButton } from "./button.styles";
import { ButtonHTMLAttributes } from "react";

export enum ButtonType {
  ButtonHome = "ButtonHome",
  ButtonSubmit = "ButtonSubmit",
}

type ButtonProps = {
  buttonStyle: ButtonType;
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getButton = (buttonStyle: ButtonType) => {
  return {
    [ButtonType.ButtonHome]: HomeButton,
    [ButtonType.ButtonSubmit]: SubmitButton,
  }[buttonStyle];
};

const Button = ({ buttonStyle, children, ...otherProps }: ButtonProps) => {
  const CustomButton = getButton(buttonStyle);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
