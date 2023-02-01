import styled from "styled-components";
import signInBackground from "../../assets/sign-in-background.jpg";

export const SignInContainer = styled.div`
  background-image: url(${signInBackground});
  height: 90vh;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  padding: 150px 0px;
`;
