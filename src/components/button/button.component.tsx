import { HomeButton, SubmitButton, BuyButton } from "./button.styles";
import { ButtonHTMLAttributes } from "react";
import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

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

export const CustomButton = styled(MuiButton)`
  background-color: #000000; /* Couleur de fond noire */
  color: #ffffff; /* Couleur du texte en blanc */
  opacity: 1;
  transition: opacity 0.3s ease; /* Animation de transition */

  &:hover {
    background-color: #000000;
    opacity: 0.8;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Ombre lorsqu'il est survolé */
  }
`;

export default Button;
