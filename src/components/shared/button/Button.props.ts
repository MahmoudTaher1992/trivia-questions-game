import { PropsWithChildren } from "react";

export interface IButtonProps extends PropsWithChildren<any> {
  desc: string;
  shortcut?: string;
  isBig?: boolean;
}
