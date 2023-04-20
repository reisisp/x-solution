import React, { FC } from 'react';
import { Col } from 'antd';
import { CustomText } from 'shared/ui';
import { MerchantCardTypeKeys } from '..';
import { SecureStatus } from './secure-status';

type MerchantCardItemProps = {
  cardKey: MerchantCardTypeKeys,
  value?: string | boolean
}

export const MerchantCardItem: FC<MerchantCardItemProps> = ({ cardKey, value }) => {
  const text = (cardKey === "currency" && "Currencies")
    || (cardKey === "cvv" && "CVV mandatory")
    || (cardKey === "hostId" && "Host side ID")
    || (cardKey === "id" && "ID")
    || (cardKey === "mcc" && "MCC")
    || (cardKey === "name" && "Name")
    || (cardKey === "secure" && "3D-secure status")
    || (cardKey === "terminal" && "Terminal")
    || ""
    
  return (
    <Col span={6} className='flex flex-col'>
      <CustomText text={text} />
      {typeof value === "boolean"
        ? <SecureStatus value={value} className='self-start' />
        : <CustomText text={value ? value : "-"} className='mt-1' />
      }
    </Col>
  )
}

