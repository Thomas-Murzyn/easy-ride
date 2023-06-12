import styled from "styled-components";

const mainColor = "grey";

export const NotificationLogo = styled.div`
  background-color: red;
  color: whitesmoke;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-size: medium;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const ArticleContainer = styled.div`
  width: 400px;
  margin-bottom: 30px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  border: 1px solid ${mainColor};
  box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  cursor: pointer;
`;

export const ArticleInfoContainer = styled.div`
  width: 100%;
  padding: 0px 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ArticleInfo = styled.p`
  color: ${mainColor};
  padding: 5px;
`;

export const ArticlePictureContainer = styled.div`
  width: 100%;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
