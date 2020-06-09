import React from "react";
import styled from "styled-components";

const StyledPalette = styled.div`
  margin: auto;
  margin-bottom: 100px;
  display: flex;

  ul {
    display: flex;

    li {
      margin: 30px;
    }
  }
`;

const Palette = () => {
  return (
    <StyledPalette>
      <p>Palette:</p>
      <ul>
        <li>Blanc</li>
        <li>Noir</li>
        <li>Rouge</li>
      </ul>
    </StyledPalette>
  );
};

export default Palette;
