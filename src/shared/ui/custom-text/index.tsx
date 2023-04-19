import React, { FC, ComponentProps } from 'react';
import { Typography } from "antd";
import cn from 'classnames';

const { Text, Title } = Typography;

export type TextColor = "text-primary" | "text-secondary" | "text-success" | "text-error";
export type TextSize = "text-baseH1" | "text-baseH2" | "text-basetext" | "text-basetext2" | "text-basetext3" | "text-basetext4" | "text-basetext5" | "text-basetext6";
export type TextWeight = "font-semibold" | "font-medium" | "font-normal";
export type TilteLevel = 1 | 2 | 3 | 4 | 5;

type TextProps = ComponentProps<typeof Text> & {
  text: string;
  textSize?: TextSize;
  textColor?: TextColor;
  textWeight?: TextWeight;
  titleLevel?: TilteLevel;
  className?: string;
};

export const CustomText: FC<TextProps> = ({ text, textSize, textColor, textWeight, className, titleLevel, ...props }) => {
  const classes = cn(
    "font-default",
    textSize ?? "text-basetext",
    textColor ?? "text-primary",
    textWeight ?? "font-normal",
    className
  );
  const Component = titleLevel ? Title : Text;

  return <Component className={classes} {...props}>{text}</Component>;
}
