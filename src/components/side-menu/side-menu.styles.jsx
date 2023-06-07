import styled from "styled-components";

const mainColor = "grey";

export const SideMenuContainer = styled.div`
  width: 18%;
  height: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  border: 1px solid ${mainColor};
  border-radius: 10px;

  @media screen and (max-width: 1300px) {
    width: 25%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: auto;
    padding: 20px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
    display: flex;
  }
`;

export const SideMenuSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    border-bottom: 1px solid ${mainColor};
  }

  @media screen and (max-width: 900px) {
    flex-direction: row;
    justify-content: center;
    border-bottom: 1px solid ${mainColor};
    margin-bottom: 10px;
    & > *:not(:last-child) {
      border-bottom: none;
    }
  }
`;

export const SideMenuSection = styled.div`
  text-align: center;
  color: ${mainColor};
  font-weight: 500;
  font-size: 20px;
  padding: 20px 0px;
  width: 100%;

  @media screen and (max-width: 900px) {
    font-size: 17px;
    width: 25%;
    border-bottom: none;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
    display: flex;
  }
`;
