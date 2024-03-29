import styled from "styled-components";

import sellBackground from "../../assets/sell_background.jpg";

export const SellFormContainer = styled.div`
  background-image: url(${sellBackground});
  background-position: center;
  height: fit-content;
  width: 100%;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormSell = styled.form`
  background-color: whitesmoke;
  box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  width: 400px;
  display: flex;
  height: fit-content;
  flex-direction: column;
  gap: 20px;

  padding: 20px;
`;
