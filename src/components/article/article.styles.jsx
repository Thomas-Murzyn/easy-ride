import styled from "styled-components";

export const ArticleWrapper = styled.div`
  margin-top: 55px;
  padding: 100px 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 70px 20px;
  }
`;

export const ArticleImageWrapper = styled.div`
  width: 40%;
  height: 500px;

  @media screen and (max-width: 1500px) {
    width: 50%;
  }

  @media screen and (max-width: 1400px) {
    width: 60%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    height: 300px;
  }
`;
