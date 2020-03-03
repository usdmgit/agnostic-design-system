import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import userClient from '../../clients/userClient';
import { User } from '../../clients/userClient/models';

import styles from './Login.module.scss';
import Button from '../../components/Button';
import Col from '../../components/Grid/Col';
import Container from '../../components/Grid/Container';
import Input from '../../components/Input';
import Row from '../../components/Grid/Row';
import Text from '../../components/Text';

import LogoImg from '../../assets/images/logo-90x48.png';

export { User } from '../../clients/userClient/models';

interface LoginProps {
  routeProps: RouteComponentProps;
  callback: (user: User) => void;
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const isEmail = (emailAddress: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailAddress).toLowerCase());
  };

  const isValidEmail = () => isEmail(email);

  const validateEmail = (value: string) => {
    setEmail(value);

    if (!isEmail(value)) {
      setErrors({ ...errors, email: 'Please enter a valid email address.' });
    } else {
      setErrors({ ...errors, email: '' });
    }
  };

  const isSubmitDisabled = () => {
    return !email || !isValidEmail() || !password;
  };

  const login = async () => {
    const path = props.routeProps.location.state.from.pathname;
    const user = await userClient.login(email, password);
    if (user) {
      props.callback(user);
      props.routeProps.history.push(path);
    } else {
      setErrors({ ...errors, email: 'User or password is incorrect' });
    }
  };

  return (
    <div className={styles['login-background']}>
      <Container>
        <Row wrapperClassName={styles['logo-container']}>
          <Col>
            <img className={styles.logo} src={LogoImg} alt="Avison Young" />
          </Col>
        </Row>

        <Row wrapperClassName={styles['login-form']}>
          <Col>
            <Container>
              <Row wrapperClassName={styles.header}>
                <Col>
                  <Text
                    wrapperClassName={styles['header-text']}
                    type="heading"
                    headingSize={5}
                    value="Nice to see you"
                  />
                  <Text
                    wrapperClassName={styles['header-text']}
                    value="Please, enter your credentials"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <form>
                    <Input
                      type="text"
                      placeholder="Email"
                      status={errors.email ? 'error' : undefined}
                      statusText={errors.email}
                      value={email}
                      onChange={validateEmail}
                      wrapperClassName={styles['login-input']}
                    />

                    <Input
                      type="password"
                      placeholder="Password"
                      status={errors.password ? 'error' : undefined}
                      statusText={errors.password}
                      value={password}
                      onChange={setPassword}
                      wrapperClassName={styles['login-input']}
                    />

                    <Button
                      wrapperClassName={styles['sign-me-in-button']}
                      iconPosition="right"
                      isDisabled={isSubmitDisabled()}
                      label="Sign me in"
                      onClick={login}
                      size="small"
                      type="main"
                    />
                  </form>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
