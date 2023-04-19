import React, { FC } from 'react';
import { CustomText } from 'shared/ui';

type TextProps = {
  text: string;
  tableHeading?: boolean;
  className?: string;
};

export const TableText: FC<TextProps> = ({ text, tableHeading, className }) => {
  return (
    <CustomText
      text={text}
      className={className}
      textSize={tableHeading ? "text-basetext4" : "text-basetext6"}
      textColor={tableHeading ? "text-primary" : "text-secondary"}
      textWeight={tableHeading ? "font-semibold" : "font-normal"}
    />
  );
}
