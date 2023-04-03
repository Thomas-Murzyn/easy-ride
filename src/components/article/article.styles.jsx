import styled from "styled-components";

export const ArticleWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainPictureContainer = styled.div`
  margin: 150px 0px;
  width: 500px;
  height: 500px;
  box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  width: 60%;
  height: 500px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;
