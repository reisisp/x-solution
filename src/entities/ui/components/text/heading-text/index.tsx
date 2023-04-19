import React, { FC } from 'react';
import { CustomText } from 'shared/ui';

type TextProps = {
  text: string;
  className?: string;
};

export const HeadingText: FC<TextProps> = ({ text, className }) => {
  return (
    <CustomText
      text={text}
      className={className}
      textSize="text-baseH1"
      textColor="text-primary"
      textWeight="font-semibold"
    />
  );
}
