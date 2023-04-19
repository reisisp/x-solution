import React, { FC } from 'react';
import { CustomText } from 'shared/ui';
import { Button, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

export const BackBtn: FC<{ text: string }> = ({ text }) => {
  const baseText = "Selected merchant";
  return (
    <Button type="text" icon={<ArrowLeftOutlined className='mr-5' style={{ fontSize: '16px'}} />} className='flex flex-row items-center p-0 hover:!bg-bg-primary h-6'>
      <Space>
        <CustomText
          textColor="text-secondary"
          textSize="text-baseH2"
          textWeight="font-medium"
          text={baseText}
        />
        <CustomText
          textColor="text-primary"
          textSize="text-baseH2"
          textWeight="font-medium"
          text={`#${text}`}
        />
      </Space>
    </Button>
  )
}

