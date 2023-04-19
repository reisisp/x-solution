import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { Space } from 'antd';

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

const PandaSvg = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9 2.18333L17.2833 6.025C17.5843 6.76887 17.5099 7.612 17.0833 8.29167C16.7204 8.80677 16.1951 9.18528 15.5917 9.36667V15.0333C15.5785 15.6699 15.313 16.2752 14.8535 16.7159C14.394 17.1566 13.7782 17.3967 13.1417 17.3833H5.09167C4.44721 17.4081 3.81976 17.1733 3.34984 16.7316C2.87993 16.2898 2.60681 15.6781 2.59167 15.0333V9.45C2.00496 9.31564 1.47651 8.9974 1.08333 8.54167C0.517992 7.83597 0.377782 6.87999 0.716667 6.04167L2.09167 2.19167C2.41595 1.37059 3.21743 0.838488 4.1 0.858334H13.8917C14.7729 0.834713 15.575 1.36393 15.9 2.18333ZM10.1262 16.025H10.1333V16.05L10.1306 16.0408L10.1262 16.025ZM10.1262 16.025H8.00833C8.01626 15.9614 8.01626 15.897 8.00833 15.8333V14.075C8.02285 13.8106 8.1452 13.5637 8.34682 13.392C8.54843 13.2203 8.81165 13.1389 9.075 13.1667C9.59868 13.1283 10.0557 13.5184 10.1 14.0417V15.825C10.1 15.8926 10.1088 15.9598 10.1262 16.025ZM13.1 16.025H11.3417C11.3496 15.9614 11.3496 15.897 11.3417 15.8333V14.075C11.2964 12.8479 10.269 11.8875 9.04167 11.925C7.81111 11.8828 6.77855 12.8446 6.73333 14.075V15.8583C6.7254 15.922 6.7254 15.9864 6.73333 16.05H5.05C4.43616 16.0783 3.91478 15.6054 3.88333 14.9917V9.43333C4.99364 9.26572 5.88536 8.43035 6.125 7.33333C6.41851 8.66425 7.64005 9.58129 9 9.49167C10.3354 9.54764 11.5188 8.63816 11.8083 7.33333C12.0428 8.49942 13.0086 9.3774 14.1917 9.5V15.0333C14.1407 15.6012 13.6701 16.0395 13.1 16.05V16.025ZM14.7667 8.03333C15.2084 8.02173 15.6177 7.79849 15.8667 7.43333V7.45833C16.0396 7.16701 16.0613 6.81015 15.925 6.5L14.55 2.70833C14.428 2.46035 14.1672 2.31178 13.8917 2.33333H4.1C3.83492 2.3091 3.58034 2.44291 3.45 2.675L2.075 6.5C1.8963 6.85368 1.92839 7.27728 2.15833 7.6C2.36603 7.85522 2.6649 8.0196 2.99167 8.05833C3.09687 8.0706 3.20313 8.0706 3.30833 8.05833C3.94955 8.09336 4.52867 7.67723 4.7 7.05833C4.82715 6.35391 5.4343 5.83748 6.15 5.825C6.87341 5.82466 7.48902 6.35182 7.6 7.06667C7.76963 7.68938 8.35628 8.10493 9 8.05833C9.649 8.10159 10.2355 7.67309 10.3917 7.04167C10.5122 6.3322 11.1221 5.80993 11.8417 5.8C12.5624 5.79901 13.177 6.3218 13.2917 7.03333C13.4614 7.66065 14.0518 8.07982 14.7 8.03333H14.7667Z" />
  </svg>


);

const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HeartSvg} {...props} />
);

export const PandaIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PandaSvg} {...props} />
);

export const CustomIcon: React.FC = () => (
  <Space>
    <HeartIcon style={{ color: 'hotpink' }} className='font-3' />
    <PandaIcon style={{ fontSize: '32px' }} />
  </Space>
);
