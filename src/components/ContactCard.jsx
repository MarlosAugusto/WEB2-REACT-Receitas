import React from "react";
import styled from "styled-components";

import colors from "../defs/colors";

const ContactContainer = styled.div`
  margin: 10px;
  background-color: #ffffff66;
  border: ${colors.greyDark} 1px solid;
  box-shadow: ${colors.grey} 1px 2px 0;
  border-radius: 5px;
  padding: 15px;
  font-family: "Myriad Pro Regular";
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailsContainer = styled.div`
  flex-direction: row;
  text-align: center;
  align-items: center;
`;

const Image = styled.img`
  width: 150px;
  height: auto;
  border-radius: 50%;
  box-shadow: ${colors.grey} 1px 2px 0;
`;

const Name = styled.p`
  font-family: "Myriad Pro Bold";
  font-size: 18px;
  color: ${colors.primary};
`;

const Detail = styled.p`
  font-size: 15px;
  color: ${colors.primary50};
`;

export const Title = styled.p`
  color: ${colors.greyDark};
  font-size: 22px;
  font-family: "Myriad Pro Bold";
`;

export const ContactCard = ({ image, name, ra, address, course }) => (
  <ContactContainer>
    <Image src={image} />
    <DetailsContainer>
      <Name>{name}</Name>
      <Detail>{ra}</Detail>
      <Detail>{address}</Detail>
      <Detail>{course}</Detail>
    </DetailsContainer>
  </ContactContainer>
);
