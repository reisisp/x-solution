import React, { FC } from 'react';
import { Row } from 'antd';
import cn from 'classnames';
import { MerchantCardItem } from './ui/card-item';

export type MerchantCardType = {
  id: string,
  mcc: string,
  secure: boolean,
  terminal: string,
  name: string,
  currency: string,
  cvv: string | undefined,
  hostId: string,
}

export type MerchantCardTypeKeys = keyof MerchantCardType;

type MerchantCardProps = {
  card: MerchantCardType;
  className?: string;
}

export const MerchantCard: FC<MerchantCardProps> = ({ card, className }) => {
  const cardKeys = Object.keys(card) as MerchantCardTypeKeys[]
  return (
    <Row gutter={[32, 16]} className={cn('w-[50%]', className)}>
      {cardKeys.map((key) => <MerchantCardItem key={key} cardKey={key} value={card[key]} />)}
    </Row>
  )
}

