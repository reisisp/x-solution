import React, { FC } from 'react';
import { Button } from 'antd';
import cn from 'classnames';
import { LeftOutlined } from '@ant-design/icons';

type CollapseBtnProps = {
  action: () => void,
  className?: string,
}

export const CollapseBtn: FC<CollapseBtnProps> = ({ action, className }) => {
  return (
    <Button
      onClick={action}
      shape='round'
      className={cn(className, "p-0")}
    >
      <LeftOutlined
        style={{ border: "1px solid" }}
        className='text-[26px]'
      />
    </Button>
  )
}
