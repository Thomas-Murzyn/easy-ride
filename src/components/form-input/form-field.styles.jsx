import styled from "styled-components";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { styled as muiStyled } from "@mui/material/styles";

const mainColor = "grey";

export const LabelFile = styled.label`
  color: ${mainColor};
  padding: 10px;
  background-color: whitesmoke;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InputFile = styled.input`
  display: none;
`;

export const NameContainer = styled.div`
  padding: 10px;
  font-size: 15px;
  color: ${mainColor};
  border: 1px solid #b6b6b6;
  border-radius: 5px;
`;

export const NamePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CustomClearRoundedIcon = muiStyled(ClearRoundedIcon)`
cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  font-size: 25px;
  display: flex;
  flex-direction: ${(file) => (file ? "column" : "column-reverse")};
  align-items: center;
`;

export const ErrorMessageWrapper = styled.div`
  text-align: center;
  font-size: 15px;
  color: #f44336;
`;
