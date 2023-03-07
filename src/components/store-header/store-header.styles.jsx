import styled from "styled-components";

export const StoreHeaderWrapper = styled.div`
  width: 80%;
  margin: 0px auto 50px auto;
  position: relative;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const StoreHeaderContainer = styled.div`
  box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
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

  @media (max-width: 750px) {
    width: 80%;
    justify-content: center;
  }
`;

export const DropDownMenu = styled.div`
  width: 25%;
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    text-transform: capitalize;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 500ms ease-in-out;
    &:hover {
      background-color: #c0c0c0;
    }
  }

  @media (max-width: 750px) {
    width: 80%;
    top: 150px;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 40%;

  .MuiSlider-root {
    width: 65%;
    color: #dcdcdc;
  }

  .MuiSlider-root:hover {
    color: #c0c0c0;
  }

  div {
    font-size: 15px;
    font-weight: 500;
  }

  @media (max-width: 750px) {
    width: 80%;
    top: 150px;
  }
`;
