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
`;

export const SideMenuSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  color: ${mainColor};
  font-weight: 500;
  font-size: 23px;
  padding: 20px 0px;
  width: 100%;
`;
