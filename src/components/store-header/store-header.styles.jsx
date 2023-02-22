import styled from "styled-components";

export const StoreHeaderContainer = styled.div`
  box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 60%;
  padding: 15px;
  margin: 0px auto 50px auto;
  display: flex;
`;

export const StoreCategorySelector = styled.div`
  font-size: 23px;
  background-color: #dcdcdc;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 500ms ease-in-out;

  &:hover {
    background-color: #c0c0c0;
  }
`;
