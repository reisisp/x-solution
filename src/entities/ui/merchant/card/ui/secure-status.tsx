import React, { FC } from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

type SecureStatusProps = {
  value: boolean,
  className?: string,
}

export const SecureStatus: FC<SecureStatusProps> = ({ value, className }) => {
  return (
    <>
      {value
        ? <CheckOutlined style={{ fontSize: '20px', color: "green" }} className={className} />
        : <CloseOutlined style={{ fontSize: '20px', color: "red" }} className={className} />
      }
    </>
  )
}

