import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

export const LogoContainer = styled.div`
  width: 80px;
  height: 50px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 5px;
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const NavLink = styled(Link)`
  font-size: 20px;
  padding: 10px;
`;
