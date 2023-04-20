import React, { FC } from 'react';
import { Row, Col } from 'antd';

import { LoginWidget } from 'widgets';
import classes from "./index.module.scss"
import { Logo } from 'entities/ui/components';

const { Login } = LoginWidget;

const LoginPage: FC = () => {

  return (
    <Row align="middle" wrap={false} className={classes.page}>
      <Col className={classes.page__logo}>
        <Logo
          height={134}
          width={195}
        />
      </Col>
      <Col className={classes.page__form}>
        <Login />
      </Col>
    </Row>
  )
}

export default LoginPage;
