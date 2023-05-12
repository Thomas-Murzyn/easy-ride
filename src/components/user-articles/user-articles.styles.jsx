import styled from "styled-components";

export const UserArticlesWrapper = styled.div`
  width: 100%;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserArticle = styled.div`
  border: 1px solid gray;
  padding: 10px;
  margin-top: 30px;
  width: 80%;
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    width: 90%;
  }

  span {
    font-size: 20px;
    @media (max-width: 900px) {
      font-size: 15px;
    }
  }
`;

export const UserArticleInfo = styled.div`
  padding: 0px 20px;
  height: 150px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
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

export const OfferContainer = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const OfferInfo = styled.div`
  background-color: lightgray;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
