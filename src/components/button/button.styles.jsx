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
  border: 1px solid black;
  -webkit-box-shadow: 2px 6px 13px 1px rgba(0, 0, 0, 0.74);
  box-shadow: 2px 6px 13px 1px rgba(0, 0, 0, 0.74);
  font-weight: inherit;
  transition: border-radius 500ms ease-in-out,
    background-color 500ms ease-in-out, border-color 500ms ease-in-out;
  &:hover {
    border-radius: 10px;
    background-color: green;
    border-color: green;
  }
`;

export const BuyButton = styled.button`
  margin-top: 50px;
  background-color: #aa0000;
  color: whitesmoke;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid #aa0000;
  -webkit-box-shadow: 2px 6px 13px 1px rgba(0, 0, 0, 0.74);
  box-shadow: 2px 6px 13px 1px rgba(0, 0, 0, 0.74);
  font-weight: inherit;
  transition: border-radius 500ms ease-in-out,
    background-color 500ms ease-in-out, border-color 500ms ease-in-out;
  &:hover {
    border-radius: 10px;
    background-color: green;
    border-color: green;
  }
`;
