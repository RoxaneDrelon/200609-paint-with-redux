import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledCellule = styled.button`
  border: 1px solid #ccc;
  background-color: "white";
  width: 40px;
  height: 40px;

  &.red {
    background-color: "red";
  }
`;

const Canevas = () => {
  const colorState = useSelector((state) => state);

  return (
    <StyledCellule
      onClick={(evt) => {
        evt.target.style.backgroundColor = colorState.current;
      }}
    ></StyledCellule>
  );
};

export default Canevas;
