import React from "react";
import { StyledButtonDiv, StyledButton, StyledShortcut } from "./Button.styles";
import { IButtonProps } from "./Button.props";

export const Button: React.FC<IButtonProps> = ({ desc, shortcut, isBig }) => {
  return (
    <StyledButtonDiv>
      <StyledButton isBig={isBig}>{desc}</StyledButton>
      {shortcut && <StyledShortcut>[{shortcut}]</StyledShortcut>}
    </StyledButtonDiv>
  );
};
