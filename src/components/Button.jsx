import React from "react";
import styled from "styled-components";


const Txt = styled.span`
  color: ${props => props.color};
  font-size: ${props => props.color ? `${props.color}px` : "20px"};
  font-weight: bold;
`;
const Btn = styled.button`
  background-color: ${props => (props.bg ? props.bg : "#ffffff")}cc;
  border-radius: 10px;
  color: ${props => props.color};
  border: ${props => props.color} solid 1px;
  width: 100%;
  height: 40px;
  text-align: center;
`;

export default function Button({ title, color, bg, fontSize, changeStep }) {
  return (
    <Btn color={color} bg={bg} onClick={() => (changeStep && changeStep(title))}>
      <Txt color={color} fontSize={fontSize}>{title}</Txt>
    </Btn>
  );
}
