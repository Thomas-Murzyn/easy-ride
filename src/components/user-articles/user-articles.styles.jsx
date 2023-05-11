import styled from "styled-components";

export const UserArticlesWrapper = styled.div`
  width: 80%;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserArticle = styled.div`
  height: 160px;
  border: 1px solid gray;
  padding: 10px;
  margin-top: 30px;
  width: 60%;
  display: flex;
  align-items: center;
`;

export const UserArticleInfo = styled.div`
  margin-top: 20px;
  padding: 0px 20px;
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: 20px;
  }
`;

export const UserArticleDetails = styled.div`
  margin-top: 20px;
  padding: 0px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: 20px;
  }
`;

export const UserArticleImage = styled.div`
  width: 250px;
  height: 150px;

  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
