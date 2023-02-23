import styled from "styled-components";

export const StoreHeaderWrapper = styled.div`
  width: 60%;
  margin: 0px auto 50px auto;
  position: relative;
`;

export const StoreHeaderContainer = styled.div`
  box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 15px;
  width: 100%;
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

export const DropDownMenu = styled.div`
  box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 15px;
  margin-top: 10px;
  background-color: whitesmoke;
  position: absolute;
  top: 80px;
  font-size: 23px;

  display: flex;
  flex-direction: column;

  span {
    padding: 10px;
    text-transform: capitalize;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 500ms ease-in-out;
    &:hover {
      background-color: #c0c0c0;
    }
  }
`;
