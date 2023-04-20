import { Button, ButtonProps } from "antd";
import { FC } from "react";

import classes from "./index.module.scss";

type BtnProps = ButtonProps & {
  children: string
}

export const CustomBtn: FC<BtnProps> = ({ children, ...rest }) => {

  return (
    <Button {...rest} className={classes.btn}
      style={{
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.5,
        border: 0,
        width: "100%"
      }}
    >
      {children}
    </Button>
  );
}
