import styled from "styled-components";
import { Box } from "@mui/material";

export const ArticleWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const CustomArticleBox = styled(Box)`
  width: 700px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  @media screen and (max-width: 800px) {
    width: 600px;
    img {
      height: 300px;
    }
  }
`;

export const ArticleImageWrapper = styled.div`
  width: 40%;
  height: 500px;

  @media screen and (max-width: 1500px) {
    width: 50%;
  }

  @media screen and (max-width: 1400px) {
    width: 60%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    height: 300px;
  }
`;
