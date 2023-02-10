import styled from "styled-components";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import { styled as muiStyled } from "@mui/material/styles";

const mainColor = "grey";

export const CustomizedArrowDropDownCircleRoundedIcon = muiStyled(
  ArrowDropDownCircleRoundedIcon
)`
  position: absolute;
  right: 10px;
  
`;

export const Select = styled.select`
  color: inherit;
  background-color: transparent;
  border: none;
  font-size: inherit;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  z-index: 99;
`;

export const FormSelectGroup = styled.div`
  width: 80%;
  border: 2px solid ${mainColor};
  border-radius: 5px;
  margin: 20px 0px 0px 0px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  color: ${mainColor};
  position: relative;

  select::-ms-expand {
    display: none;
  }
`;
