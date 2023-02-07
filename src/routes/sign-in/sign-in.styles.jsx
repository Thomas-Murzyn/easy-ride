import styled from "styled-components";
import signInBackground from "../../assets/sign-in-background.jpg";

export const SignInContainer = styled.div`
  background-image: url(${signInBackground});
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 150px 0px;
`;
