import React, { useState } from "react";
import styled from "styled-components";

import "../assets/fonts/Malvinas Sans/style.css";
import colors from "../defs/colors";
import openMenu from "../assets/icons/xbox-controller-menu.svg";
import closeMenu from "../assets/icons/close-circle.svg";

const HD = styled.div`
  width: 100%;
  height: 80px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${colors.primaryDark};
  position: fixed;

  @media (max-width: 767px) {
    justify-content: space-between;
  }
  @media (min-width: 991px) {
    height: 100px;
  }

  @media (min-width: 1200px) {
    height: 120px;
  }

  @media (min-width: 1600px) {
    height: 150px;
  }

  @media (min-width: 1920px) {
    height: 180px;
  }
`;

const Logo = styled.img`
  height: 80%;
  width: auto;
  z-index: 1;

  @media (max-width: 767px) {
    margin-left: 10%;
  }
`;

const Menu = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: none;
    position: absolute;
  }
`;

const MenuItem = styled.a`
  margin-left: 20px;
  text-decoration: none;
  font-family: "Malvinas Regular Regular";
  color: ${colors.secundary};
  font-size: 20px;

  :hover {
    text-decoration: underline;
    color: ${colors.secundary50};
  }
  @media (min-width: 991px) {
    font-size: 25px;
  }

  @media (min-width: 1200px) {
    font-size: 28px;
  }

  @media (min-width: 1440px) {
    font-size: 35px;
  }

  @media (min-width: 1600px) {
    font-size: 40px;
  }

  @media (min-width: 1920px) {
    font-size: 45px;
  }
`;

const MenuMobileButton = styled.button`
  align-items: center;
  justify-content: center;
  margin-right: 10%;
  background-color: transparent;
  border: 0;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
    position: absolute;
  }
`;

const MenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  align-items: center;
  background-color: ${colors.primaryDark};
  z-index: 0;

  -webkit-animation: openMenu 1s;
  animation: openMenu 1s;

  @-webkit-keyframes openMenu {
    from {
      top: -210px;
    }
    to {
      top: 80px;
    }
  }
  @keyframes openMenu {
    from {
      top: -210px;
    }
    to {
      top: 80px;
    }
  }
  top: 80px;

  @media (min-width: 768px) {
    display: none;
    position: absolute;
  }
`;
const MenuItemMobile = styled.a`
  text-decoration: none;
  font-family: "Malvinas Regular Regular";
  color: ${colors.secundary};
  font-size: 25px;
  text-align: center;
  height: 35px;
  border-top-color: ${colors.primary};
  border-top-width: 1px;
  border-top-style: solid;
  width: 90%;
  display: inline-block;
  padding-top: 5px;

  :hover {
    text-decoration: underline;
    color: ${colors.secundary50};
  }
`;

const MobileMenu = ({ submenus }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuMobileButton onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? (
          <img src={openMenu} alt="open menu icon" />
        ) : (
          <img src={closeMenu} alt="close menu icon" />
        )}
      </MenuMobileButton>
      {isOpen && (
        <MenuMobile>
          {submenus.map(({ text, url }) => (
            <MenuItemMobile href={url}>
              <span>{text}</span>
            </MenuItemMobile>
          ))}
        </MenuMobile>
      )}
    </>
  );
};

export const Header = ({ logo, submenus }) => (
  <HD>
    <Logo src={logo} />
    <Menu>
      {submenus.map(({ text, url }) => (
        <MenuItem href={url}>{text}</MenuItem>
      ))}
    </Menu>
    <MobileMenu submenus={submenus} />
  </HD>
);
