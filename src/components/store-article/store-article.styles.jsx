import styled from "styled-components";

const mainColor = "grey";

export const ArticleContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  border: 2px solid ${mainColor};
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
    object-fit: cover;
  }
`;
