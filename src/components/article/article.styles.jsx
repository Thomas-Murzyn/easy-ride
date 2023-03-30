import styled from "styled-components";

export const ArticleWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArticlePictureContainer = styled.div`
  margin: 150px 0px;
  width: 500px;
  height: 500px;
  box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  width: 700px;
  height: 500px;
`;

export const PictureContainer = styled.div`
  width: ${({ hsize }) => hsize && hsize};
  height: ${({ hsize }) => hsize && hsize};

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`;
