import React, { FC } from 'react';
import { Collapse } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

// import cn from 'classnames';
import "./index.scss";

const { Panel } = Collapse;

type CollapsePanelProps = {
  panelHeader: string,
  children: React.ReactNode,
  className?: string,
}

export const CollapsePanel: FC<CollapsePanelProps> = ({ panelHeader, children }) => {
  const expandIcon: FC<{ isActive?: boolean }> = ({ isActive }) => {
    return <CaretDownOutlined rotate={isActive ? 90 : 0} />
  }

  return (
    <Collapse
      size="small"
      ghost
      expandIcon={expandIcon}
      expandIconPosition="end"
      defaultActiveKey={['1']}
    >
      <Panel header={panelHeader} key="1" >
        {children}
      </Panel>
    </Collapse>
  )
}

