import styled from "styled-components";

export const UserProfilContainer = styled.div`
  height: fit-content;
  width: 70%;
  margin: 55px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 25px;
    font-weight: bold;
  }
`;

export const UserButton = styled.div`
  background-color: grey;
  color: whitesmoke;
  padding: 7px 17px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  font-weight: 500;
  margin: 20px 0;
  position: relative;
`;

export const UserNotificationLogo = styled.div`
  background-color: red;
  color: whitesmoke;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: xx-small;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  position: absolute;
  top: 3px;
  right: 3px;
`;
