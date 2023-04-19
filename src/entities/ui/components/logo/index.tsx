import React, { FC } from 'react';
import { Image } from 'antd';
import LogoImg from "./logo.png";
import LogoImgCollapsed from "./logo-collapsed.png";

export const Logo: FC = () => {
  return (
    <Image
      src={LogoImg}
      preview={false}
      height={83}
      width={120}
    />
  )
}

export const LogoCollapsed: FC = () => {
  return (
    <Image
      src={LogoImgCollapsed}
      preview={false}
      height={18}
      width={45}
    />
  )
}