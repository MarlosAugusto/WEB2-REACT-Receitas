import React, { useState } from "react";
import styled from "styled-components";

import "../assets/fonts/Malvinas Sans/style.css";
import colors from "../defs/colors";
// import openMenu from "../assets/icons/xbox-controller-menu.svg";
// import closeMenu from "../assets/icons/close-circle.svg";

const CT = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secundary50};
  padding-top: 80px;

  @media (min-width: 991px) {
    padding-top: 100px;
  }

  @media (min-width: 1200px) {
    padding-top: 120px;
  }

  @media (min-width: 1600px) {
    padding-top: 150px;
  }

  @media (min-width: 1920px) {
    padding-top: 180px;
  }

  height: 1000px;
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

export const Container = () => <CT></CT>;
