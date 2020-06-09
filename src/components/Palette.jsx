import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const StyledPalette = styled.div`
  margin: auto;
  margin-bottom: 100px;
  display: flex;

  ul {
    display: flex;

    li {
      margin: 10px;
      border: 3px solid lightgray;

      &.selected {
        border: 3px solid black;
      }
    }
  }
`;

const Palette = () => {
  const dispatch = useDispatch();
  const colorState = useSelector((state) => state);

  return (
    <StyledPalette>
      <p>Palette:</p>
      <ul>
        {colorState.available.map((color) => {
          return (
            <li
              className={color === colorState.current && "selected"}
              onClick={() => {
                dispatch({
                  type: "CHANGE_COLOR",
                  newColor: color,
                });
              }}
            >
              {color}
            </li>
          );
        })}
      </ul>
    </StyledPalette>
  );
};

export default Palette;
