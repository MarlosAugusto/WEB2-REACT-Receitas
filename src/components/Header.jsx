import React from "react";
import styled from "styled-components";

import "../assets/fonts/Malvinas Sans/style.css";
import colors from "../defs/colors";

const HD = styled.div`
  width: 100%;
  height: 80px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${colors.primaryDark};
`;

const Logo = styled.img`
  height: 80%;
  width: auto;
`;

const Menu = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MenuItem = styled.a`
  margin-left: 20px;
  text-decoration: none;
  font-family: "Malvinas Regular Regular";
  color: ${colors.secundary};

  :hover {
    text-decoration: underline;
    color: ${colors.secundary50};
  }
`;

export const Header = ({ logo, submenus }) => (
  <HD>
    {console.log("submenus", submenus)}
    <Logo src={logo} />
    <Menu>
      {submenus.map(({ text, url }) => (
        <MenuItem href={url}>{text}</MenuItem>
      ))}
    </Menu>
  </HD>
);
