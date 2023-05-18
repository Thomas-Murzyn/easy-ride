import styled from "styled-components";

const mainColor = "grey";

export const SideMenuContainer = styled.div`
  width: 18%;
  height: 500px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  border: 1px solid ${mainColor};
  border-radius: 10px;

  & > *:not(:last-child) {
    border-bottom: 1px solid ${mainColor};
  }

  @media screen and (max-width: 1300px) {
    width: 25%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    height: 200px;

    & > *:not(:last-child) {
      border: none;
    }

    button {
      font-size: 15px !important;
      padding: 5px 8px !important;
      margin: 0 !important;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
    display: flex;
  }
`;

export const SideMenuSection = styled.div`
  text-align: center;
  color: ${mainColor};
  font-weight: 500;
  font-size: 23px;
  padding: 20px 0px;
  width: 100%;

  @media screen and (max-width: 900px) {
    font-size: 17px;
    width: 25%;
    background-color: red;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
    display: flex;
  }
`;
