import React from "react";
import Container from "./style";

const GrayCard = ({ children, gridArea }) => {
  return <Container gridArea={gridArea}>{children}</Container>;
};

export default GrayCard;
