import styled from "styled-components";

import "../assets/fonts/Malvinas Sans/style.css";
import colors from "../defs/colors";

export const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secundary50};
  padding-top: 100px;
  text-align: -webkit-center;
  padding-bottom: 40px;

  @media (min-width: 991px) {
    padding-top: 120px;

    .child {
      width: 800px;
    }
  }

  @media (min-width: 1200px) {
    padding-top: 140px;

    .child {
      width: 950px;
    }
  }

  @media (min-width: 1600px) {
    padding-top: 170px;

    .child {
      width: 1200px;
    }
  }

  @media (min-width: 1920px) {
    padding-top: 200px;

    .child {
      width: 1400px;
    }
  }

  /* height: 1000px; */
`;
