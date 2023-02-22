import styled from "styled-components";
import signInBackground from "../../assets/sign-in-background.jpg";

export const SignInContainer = styled.div`
  position: relative;
  top: 55px;
  padding: 20px;
  background-image: url(${signInBackground});
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media (max-height: 620px) {
    height: auto;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
