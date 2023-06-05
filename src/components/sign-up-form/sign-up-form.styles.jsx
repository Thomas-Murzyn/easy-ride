import styled from "styled-components";

export const SignUpFormContainer = styled.form`
  background-color: whitesmoke;
  box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  width: 400px;
  display: flex;
  height: fit-content;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px;
  margin: 100px 0px 30px 0px;

  @media (max-width: 900px) {
    margin: 30px 0px;
  }
`;

export const SignUpTextFieldContained = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
