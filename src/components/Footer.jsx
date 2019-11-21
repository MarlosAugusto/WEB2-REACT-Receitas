import React from "react";
import styled from "styled-components";

import "../assets/fonts/Malvinas Sans/style.css";
import colors from "../defs/colors";

const TF = styled.div`
  width: 100%;
  min-height: 80px;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-direction: row;
  background-color: ${colors.primaryDark};
`;

const Items = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: "Malvinas Regular Regular";
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 991px) {
    display: inline-flex;
  }
`;

const Item = styled.p`
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  color: ${colors.secundary};
  border: none;
  text-align: center;
  font-size: 15px;

  @media (min-width: 991px) {
    border-left: ${props => (props.bl ? "#eb703d solid 1.5px" : "none")};
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 22px;
  }

  @media (min-width: 1600px) {
    font-size: 25px;
  }

  @media (min-width: 1920px) {
    font-size: 30px;
  }
`;

export const Footer = () => (
  <TF>
    <Items>
      <Item>Desenvolvido por Marlos Augusto</Item>
      <Item bl>Bacharelado em Engenharia de Software - UTFPR</Item>
      <Item bl>Dois Vizinhos - PR - 2019</Item>
    </Items>
  </TF>
);
