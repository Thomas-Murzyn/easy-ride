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
