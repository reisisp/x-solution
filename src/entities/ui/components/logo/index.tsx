import React, { FC } from 'react';
import { Image } from 'antd';
import LogoImg from "./logo.png";
import LogoImgCollapsed from "./logo-collapsed.png";

type LogoProps = {
  height: number,
  width: number
}

export const Logo: FC<LogoProps> = ({ height, width }) => {
  return (
    <Image
      src={LogoImg}
      preview={false}
      height={height}
      width={width}
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