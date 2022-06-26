import styled from "styled-components";
import { IButtonProps } from "./Button.props";

export const StyledButtonDiv = styled.div<IButtonProps>`
  position: relative;
  width: fit-content;
`;

export const StyledButton = styled.button<IButtonProps>`
  ${({ isBig }) => (isBig ? `padding: 15px 35px;` : `padding: 5px 35px;`)}

  font-size: 20px;

  border-width: 2px;
  border-radius: 6px;

  background-color: #c8c7c7;
  :hover {
    background-color: yellow;
  }
  :focus {
    background-color: orange;
  }
  :active {
    background-color: pink;
  }
`;

export const StyledShortcut = styled.div<IButtonProps>`
  position: absolute;
  top: 1px;
  left: 4px;
  z-index: 100;
`;
