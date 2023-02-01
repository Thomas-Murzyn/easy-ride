import styled from "styled-components";

export const HomeButton = styled.button`
  background-color: rgba(253, 252, 253, 0);
  border: 1px solid whitesmoke;
  padding: 20px 30px;
  font-size: 30px;
  color: whitesmoke;
  cursor: pointer;
  transition: background-color 1s, color 1s, border 1s;
  &:hover {
    background-color: rgba(253, 252, 253, 0.5);
    color: black;
    border: 1px solid black;
  }
`;

export const SubmitButton = styled.button`
  background-color: black;
  color: whitesmoke;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
`;
