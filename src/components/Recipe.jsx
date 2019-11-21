import React from "react";
import styled from "styled-components";

import colors from "../defs/colors";

export const Form = styled.form`
  margin: 10px;
  background-color: #ffffff66;
  border: ${colors.greyDark} 1px solid;
  box-shadow: ${colors.grey} 1px 2px 0;
  border-radius: 5px;
  padding: 15px;
  font-family: "Myriad Pro Regular";
`;

export const Input = styled.input`
  padding: 5px;
  height: 18px;
  width: -webkit-fill-available;
  border: ${colors.primary} 1px solid;
  box-shadow: ${colors.grey} 1px 1px 0;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 5px;
  min-height: 80px;
  width: -webkit-fill-available;
  border: ${colors.primary} 1px solid;
  box-shadow: ${colors.grey} 1px 1px 0;
  border-radius: 5px;
`;

export const Select = styled.select`
  height: 30px;
  width: -webkit-fill-available;
  border: ${colors.primary} 1px solid;
  box-shadow: ${colors.grey} 1px 1px 0;
  border-radius: 5px;
`;

export const Label = styled.p`
  margin: 5px;
  font-size: 15px;
  color: ${colors.primary};
  text-align: left;
`;

export const ReadOnlyText = styled.p`
  text-align: left;
  padding: 5px;
  height: 20px;
  width: -webkit-fill-available;
  border: ${colors.primary} 1px solid;
  box-shadow: ${colors.grey} 1px 1px 0;
  background-color: #fff;
  border-radius: 5px;
  margin: 0;

  :hover {
    cursor: not-allowed;
  }
`;

export const FormItemRow = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: ${props => (props.center ? "center" : "space-between")};
  margin-top: ${props => (props.mt ? `${props.mt}px` : 0)};

  @media (max-width: 547px) {
    flex-direction: column;
  }
`;

export const FormItemCol = styled.div`
  align-self: ${props => (props.top ? "flex-start" : "flex-end")};
  width: ${props =>
    props.wd
      ? `${(props.wd === 1 && "100%") ||
          (props.wd === 2 && "48.5%") ||
          (props.wd === 3 && "31.33%")}`
      : "100%"};

  @media (max-width: 546px) {
    width: 100%;
  }
`;

export const List = styled.div`
  margin: 10px;
  background-color: #ffffff66;
  border: ${colors.greyDark} 1px solid;
  box-shadow: ${colors.grey} 1px 2px 0;
  border-radius: 5px;
  padding: 15px;
  font-family: "Myriad Pro Regular";
`;

export const Title = styled.p`
  color: ${colors.greyDark};
  font-size: 22px;
`;

export const Subtitle = styled.p`
  color: ${colors.grey};
  font-size: 18px;
`;

export const Detail = styled.p`
  font-size: 15px;
  color: ${colors.primary50};
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  border: ${colors.greyDark} 1px solid;
  box-shadow: ${colors.grey} 1px 2px 0;
  max-width: -webkit-fill-available;
  object-fit: cover;
  overflow: hidden;
  background-color: #fff;
`;

export const ImageNotFound = styled.p`
  position: absolute;
  font-size: 25px;
  color: ${colors.secundary};
  max-width: min-content;
  margin: 0;
`;

export const RecipeButton = styled.button`
  display: contents;
  cursor: pointer;
`;
