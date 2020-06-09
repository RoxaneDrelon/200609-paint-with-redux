import React from "react";
import styled from "styled-components";

const StyledCellule = styled.button`
  border: 1px solid #ccc;
  background-color: white;
  width: 40px;
  height: 40px;
`;

const Canevas = () => {
  return <StyledCellule></StyledCellule>;
};

export default Canevas;
