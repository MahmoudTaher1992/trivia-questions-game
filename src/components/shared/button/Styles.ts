import styled from "styled-components";
import { IButtonProps } from "./Button.props";

export const StyledButton = styled.button<IButtonProps>`
  ${({ isBig }) => (isBig ? `padding: 15px;` : `padding: 5px 20px;`)}

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
