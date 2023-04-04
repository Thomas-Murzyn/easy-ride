import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const PictureContainer = styled.div`
  position: relative;
  margin: 150px 0px;
  width: 500px;
  height: 500px;
  box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 18px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  width: 40%;
  height: 500px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const ArrowBack = styled(ArrowBackIosIcon)`
  position: absolute;
  top: 45%;
  left: 5px;
  color: whitesmoke;
  cursor: pointer;
`;

export const ArrowForward = styled(ArrowForwardIosIcon)`
  position: absolute;
  top: 45%;
  right: 5px;
  color: whitesmoke;
  cursor: pointer;
`;
