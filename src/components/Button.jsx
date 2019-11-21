import React from "react";
import styled from "styled-components";

const Txt = styled.span`
  color: ${props => props.color};
  font-size: ${props => (props.color ? `${props.color}px` : "20px")};
  font-weight: bold;
`;
const Btn = styled.button`
  background-color: ${props => (props.bg ? props.bg : "#ffffff")}cc;
  border-radius: 10px;
  color: ${props => props.color};
  border: ${props => props.color} solid 1px;
  width: 100%;
  height: 30px;
  text-align: center;
`;

export function Button({ title, color, bg, fontSize, clicked }) {
  return (
    <Btn color={color} bg={bg} onClick={clicked}>
      <Txt color={color} fontSize={fontSize}>
        {title}
      </Txt>
    </Btn>
  );
}
