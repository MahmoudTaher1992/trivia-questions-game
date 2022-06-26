import React from "react";
import { StyledButton } from "./Styles";
import { IButtonProps } from "./Button.props";

export const Button: React.FC<IButtonProps> = ({ desc, isBig }) => {
  return <StyledButton isBig={isBig}>{desc}</StyledButton>;
};
