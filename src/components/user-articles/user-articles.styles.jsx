import styled from "styled-components";

export const UserArticlesWrapper = styled.div`
  width: 100%;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  h1 {
    @media (max-width: 850px) {
      font-size: 27px;
    }

    @media (max-width: 700px) {
      font-size: 23px;
    }

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
`;

export const UserArticle = styled.div`
  border: 1px solid gray;
  padding: 10px;
  margin-top: 30px;
  width: 50%;
  display: flex;
  align-items: center;

  @media (max-width: 1500px) {
    width: 70%;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    width: 300px;
    flex-direction: column;
    gap: 20px;
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

  @media (max-width: 800px) {
    height: fit-content;
    flex-direction: column;

    width: 100%;
  }
`;

export const UserArticleImage = styled.div`
  width: 250px;
  height: 150px;
  border-radius: 5px;

  @media (max-width: 800px) {
    width: 100%;
  }

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
