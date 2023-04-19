import React, { FC } from 'react';
import { CollapsePanel } from 'shared/ui';

// import cn from 'classnames';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export type MerchantOperationsType = {
}


type MerchantOperationsProps = {
  data: MerchantOperationsType;
  className?: string;
}

export const MerchantOperations: FC<MerchantOperationsProps> = ({ data }) => {

  console.log(data)
  return (
    <CollapsePanel panelHeader='asd' >
      <p>{text}</p>
    </CollapsePanel>
  )
}

