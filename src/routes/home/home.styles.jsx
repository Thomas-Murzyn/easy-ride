import styled from "styled-components";
import image from "../../assets/home-picture.jpg";

export const HomeContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${image});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: whitesmoke;
    font-size: 4vw;
  }
`;

export const ButtonContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
`;
