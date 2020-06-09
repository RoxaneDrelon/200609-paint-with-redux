import React from "react";
import styled from "styled-components";
import Cellule from "./Cellule.jsx";

const StyledCanevas = styled.div`
  background: #ddd;
  width: 250px;
  height: 250px;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
const Row = styled.ul`
  display: flex;
`;

const Canevas = () => {
  return (
    <StyledCanevas>
      <Row>
        <Cellule />
        <Cellule />
        <Cellule />
        <Cellule />
        <Cellule />
      </Row>
      <Row>
        <Cellule />
        <Cellule />
        <Cellule />
        <Cellule />
        <Cellule />
      </Row>
      <Row>
        <Cellule />
        <Cellule />
        <Cellule />
        <Cellule />
        <Cellule />
      </Row>
      <Row>
        <Cellule />
        <Cellule />
        <Cellule />
        <Cellule />
        <Cellule />
      </Row>
      <Row>
        <Cellule />
        <Cellule />
        <Cellule />
        <Cellule />
        <Cellule />
      </Row>
    </StyledCanevas>
  );
};

export default Canevas;
