import React, { FC, ComponentProps } from 'react';
import { Tag } from "antd";
import cn from 'classnames';
import { CustomText, TextColor, TextWeight } from '../custom-text';

export type TagRadius = "rounded-normal" | "rounded-full";
export type TagBorderColor = "border-color-secondary" | "border-color-success";

type TagProps = ComponentProps<typeof Tag> & {
  text: string;
  tagBorderColor?: TagBorderColor;
  textColor?: TextColor;
  textWeight?: TextWeight;
  tagRadius?: TagRadius;
  className?: string;
};

export const CustomTag: FC<TagProps> = ({ text, tagRadius, tagBorderColor, textColor, textWeight, className }) => {
  const classes = cn(
    "bg-bg-tag", 
    "border", 
    "px-3", 
    "py-1", 
    tagBorderColor ?? "border-color-secondary", 
    tagRadius ?? "rounded-normal", 
    className);

  return (
    <Tag className={classes}>
      <CustomText textSize="text-basetext5" textColor={textColor ?? "text-secondary"} textWeight={textWeight ?? "font-normal"} text={text} />
    </Tag>
  )
}
