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
    padding: 5px;

    button {
      margin: 10px 0;
    }
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
    object-fit: fill;
    border-radius: 5px;
  }
`;

export const OfferContainer = styled.div`
  font-size: 17px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  button {
    font-size: 17px !important;
    padding: 5px 8px !important;
  }

  @media (max-width: 600px) {
    font-size: 15px !important;

    button {
      font-size: 15px !important;
      padding: 5px 8px !important;
    }
  }
`;

export const OfferInfo = styled.div`
  border: 1px solid gray;
  padding: 10px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      margin: 5px 0px;
    }
  }
`;

export const ModalButtonContainer = styled.div`
  margin: 20px auto 0 auto;

  display: flex;
  flex-direction: row !important;
  gap: 30px;
`;

export const UserMailerContainer = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  text-align: center;
  padding: 5px;
`;

export const UserMailerTitle = styled.h4`
  width: 100%;
  text-align: center;
`;
