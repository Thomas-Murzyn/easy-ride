import { HomeButton, SubmitButton, BuyButton } from "./button.styles";
import { ButtonHTMLAttributes } from "react";

export enum ButtonType {
  ButtonHome = "ButtonHome",
  ButtonSubmit = "ButtonSubmit",
  BuyButton = "BuyButton",
}

type ButtonProps = {
  buttonStyle: ButtonType;
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getButton = (buttonStyle: ButtonType) => {
  return {
    [ButtonType.ButtonHome]: HomeButton,
    [ButtonType.ButtonSubmit]: SubmitButton,
    [ButtonType.BuyButton]: BuyButton,
  }[buttonStyle];
};

const Button = ({ buttonStyle, children, ...otherProps }: ButtonProps) => {
  const CustomButton = getButton(buttonStyle);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
