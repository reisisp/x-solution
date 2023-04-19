import React, { FC } from 'react';
import { CustomTag } from 'shared/ui';

type TagProps = {
  text: string;
  success?: boolean;
  className?: string;
};

export const StatusTag: FC<TagProps> = ({ text, success, className }) => {
  return (
    <CustomTag
      text={text}
      tagRadius="rounded-normal"
      tagBorderColor={success ? "border-color-success" : "border-color-secondary"}
      textColor={success ? "text-success" : "text-secondary"}
      textWeight={success ? "font-medium" : "font-normal"}
      className={className}
      color={success ? "border-color-secondary" : "borde-color-success"}
    />
  )
}
