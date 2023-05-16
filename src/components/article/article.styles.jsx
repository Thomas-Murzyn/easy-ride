import styled from "styled-components";

export const ArticleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  padding: 10px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
  }
`;
