import styled, { css } from "styled-components";

const mainColor = "grey";

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
`;

export const Label = styled.label`
  position: absolute;
  padding: 5px 10px;
  color: ${mainColor};
  bottom: 3px;
  left: 0px;
  font-size: 25px;
  pointer-events: none;
  transition: font-size 350ms ease-in-out, top 350ms ease-in-out;
  ${({ shrink }) => shrink && shrinkLabel}
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  background-color: whitesmoke;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom: 1px solid ${mainColor};
  box-shadow: 0 1px 0 0 ${mainColor};

  &:focus {
    outline: none;
  }
  &:focus ~ ${Label} {
    ${shrinkLabel};
  }
`;

export const FormGroup = styled.div`
  width: 80%;
  margin: 20px 0px;
  font-size: 25px;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
`;
