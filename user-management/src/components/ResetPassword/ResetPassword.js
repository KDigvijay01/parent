import React, { useState } from "react";
import { Button, Form, Grid, Header, Message } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import Password from "../common/Password";
import Logo from "../common/Logo";
import HttpService from "../../services/HttpService";
import { useTranslation } from "react-i18next";

const ResetPassword = (props) => {
  const { t } = useTranslation();
  const [values, setValues] = useState({
    password: '',
    confirmPassword: '',
    serverError: false,
    passwordError: false,
    confPasswordError: false,
    errorMessage: '',
    resetPasswordSuccess: false
  });

  const passwordLabel = React.createRef();
  const confPasswordLabel = React.createRef();

  const handleReset = async (event) => {
    event.preventDefault();
    setValues({ ...values, passwordError: false, serverError: false, confPasswordError: false, errorMessage: '' });
    const accountId = props.match.params.accountId;
    const token = props.match.params.token;
    if (validateForm()) {
      const { password } = values;
      try{
        const response = await HttpService.post('/resetPassword', { accountId, password, token });
        if (response.status === 200) {
          setValues({ ...values, resetPasswordSuccess: true});
        }
      } catch (err) {
        console.log(err);
        setValues({ ...values, serverError: true});       
        if (err.response && err.response.data && err.response.data.message) {
          setValues({ ...values, serverError: true, errorMessage: err.response.data.message});
        }
      }
    }
  };

  const validateForm = () => {
    const { password, confirmPassword } = values;
    let passWordErr = false, confPasswordErr = false;
    if (!password || password.length < 7) {      
      passWordErr = true;
    }    
    if (!confirmPassword || password !== confirmPassword) {      
      confPasswordErr = true;
    }
    setValues({ ...values, passwordError: passWordErr, confPasswordError: confPasswordErr });    
    return (!passWordErr && !confPasswordErr);
  };

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });  
  };

  const handlePasswordFocus = e =>
    (passwordLabel.current.innerText = "Enter your Password");

  const handlePasswordBlur = e => (passwordLabel.current.innerText = "");

  const handleConfPasswordFocus = e =>
    (confPasswordLabel.current.innerText = "Confirm your Password");

  const handleConfPasswordBlur = e => (confPasswordLabel.current.innerText = "");

    return (
      <div className="container">
      <Grid className="left-col">          
          <Grid.Column>
            <Logo />
            <Grid
              textAlign="center"
              style={{ marginTop: "6rem" }}
              verticalAlign="middle"
              className="padit"
            >
              <Grid.Column style={{ maxWidth: 350 }}>
                <Header as="h3" color="grey" textAlign="left">
                  {t('reset-password-header')}
                </Header>              
                <Form size="large">
                  <div className="password">
                    <Password
                      onBlur={handlePasswordBlur}
                      onFocus={handlePasswordFocus}
                      value={values.password}
                      name="password"
                      onChange={handleChange}
                      isError={values.passwordError}
                    />
                    <p ref={passwordLabel} className="label"></p>
                    <Password
                      onBlur={handleConfPasswordBlur}
                      onFocus={handleConfPasswordFocus}
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      isError={values.confPasswordError}
                    />
                  </div>
                  <p ref={confPasswordLabel} className="label"></p>
                  { values.serverError &&
                    <Message negative>
                      <Message.Header>{t('server-error-header')}</Message.Header>
                      <p>{values.errorMessage ? values.errorMessage : t('server-error-message')}</p>
                    </Message>
                  }
                  { values.resetPasswordSuccess &&
                    <div>
                    <Message
                      positive
                      header='Success'
                      content={t('You may now login to access your account.')}
                    />
                    <div className="submit-div flex end">                      
                      <Button color="green" fluid size="large" onClick={() => props.history.push('/')}>
                        {t('login')}
                      </Button>
                    </div>
                    </div>
                  }
                  { !values.resetPasswordSuccess &&
                  <div className="submit-div flex end">
                    <Button color="green" fluid size="large" onClick={handleReset}>
                      {t('submit')}
                    </Button>
                  </div>
                  }
                </Form>
              </Grid.Column>
            </Grid>
            </Grid.Column>
          </Grid>
          <Grid className="right-col">
          <Grid.Column>
            <div className="imagesection"></div>
          </Grid.Column>          
      </Grid>
      </div>
    ); 
}

export default withRouter(ResetPassword);