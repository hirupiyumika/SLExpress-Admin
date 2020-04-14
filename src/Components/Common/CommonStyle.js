import styled from "styled-components";
import { Message, Grid } from "semantic-ui-react";

export const TitleWapper = styled.h1`
  font-weight: bolder;
  text-transform: capitalize;
  line-height: 1.2;
  box-sizing: border-box;
  margin-top: 0;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  display: block;
  font-size: 2.5rem;
  font-family: "Bree Serif", serif;
  color: #2a2a72;
  text-align: center !important;
  animation: fadeIn 1s ease-in !important;
`;

export const StyleGrid = styled(Grid)`
  background: #e3e4fa;
  padding: 5rem !important;
  margin-right: 0.5rem !important;
  margin-top: 0.5rem !important;
`;

export const StyledMessageUser = styled(Message)`
  padding: 10px 14px !important;
  background: #c3fdb8 !important;
  margin: 10px 30px !important;
  border-radius: 9px !important;
  position: relative !important;
  animation: fadeIn 1s ease-in !important;
  box-shadow: none !important;

  &:after {
    content: "" !important;
    position: absolute !important;
    top: 50% !important;
    width: 0 !important;
    height: 0 !important;
    border: 20px solid transparent !important;
    border-bottom: 0 !important;
    margin-top: -10px !important;
  }

  &:after {
    left: 0 !important;
    border-right-color: #c3fdb8 !important;
    border-left: 0 !important;
    margin-left: -20px !important;
  }
`;

export const StyledMessageAdmin = styled(Message)`
  padding: 10px 14px !important;
  background: #addfff !important;
  margin: 10px 30px !important;
  border-radius: 9px !important;
  position: relative !important;
  animation: fadeIn 1s ease-in !important;
  box-shadow: none !important;

  &:after {
    content: "" !important;
    position: absolute !important;
    top: 50% !important;
    width: 0 !important;
    height: 0 !important;
    border: 20px solid transparent !important;
    border-bottom: 0 !important;
    margin-top: -10px !important;
  }

  &:after {
    right: 0 !important;
    border-left-color: #addfff !important;
    border-right: 0 !important;
    margin-right: -20px !important;
  }
`;
