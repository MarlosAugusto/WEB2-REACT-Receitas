import styled from "styled-components";

import "../assets/fonts/Malvinas Sans/style.css";
import colors from "../defs/colors";

export const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secundary50};
  padding-top: 80px;
  text-align: center;
  padding-bottom: 40px;

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

  /* height: 1000px; */
`;
