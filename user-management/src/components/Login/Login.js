import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, Grid, Header, Message, Responsive } from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from '@material-ui/core/Checkbox';
import "./Login.scss";
import Password from "../common/Password";
import Logo from "../common/Logo";
import HttpService from "../../services/HttpService";
import { useTranslation } from "react-i18next";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const LoginForm = (props) => {
  const { t } = useTranslation();

  const [values, setValues] = useState({
    email: '',
    password: '',
    signupEmail: '',
    conditionsChecked: false,
    emailError: false,
    passwordError: false,
    serverError: false,
    errorMessage: ''
  });

  const emailLabel = React.createRef();
  const passwordLabel = React.createRef();

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });    
  };

  const handleSignup = () => {
    props.updateEmail(values.signupEmail);
    props.history.push("/signup");
  };

  const handleSubmit = async (event, SigninUser) => {
    event.preventDefault();
    setValues({ ...values, emailError: false, passwordError: false, serverError: false, errorMessage: '' }); 
    if (validateForm()) {
      const { email, password } = values;
      try {
        const response = await HttpService.post('/login', { email, password });
        const url = `${process.env.REACT_APP_REDIRECT_URL}?userId=${response.data.accountId}&token=${response.data.token}`;
        window.location.href = url;

      } catch(err) {
        console.log(err);
        setValues({ ...values, serverError: true});       
        if (err.response && err.response.data && err.response.data.message) {
          setValues({ ...values, serverError: true, errorMessage: err.response.data.message});
        }        
      }      
    }
  };

  const validateForm = () => {
    const { email, password } = values;
    let emailErr = false, passWordErr = false;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {      
      emailErr = true;; 
    }
    setValues({ ...values, emailError: false });
    if (!password || password.length < 7) {      
      passWordErr = true;
    }
    setValues({ ...values, emailError: emailErr, passwordError: passWordErr });
    return (!emailErr && !passWordErr);
  };

  const handleEmailFocus = e =>
    (emailLabel.current.innerText = "Enter your Email address");

  const handleEmailBlur = e => (emailLabel.current.innerText = "");

  const handlePasswordFocus = e =>
    (passwordLabel.current.innerText = "Enter your Password");

  const handlePasswordBlur = e => (passwordLabel.current.innerText = "");

  
  return (
    

    <Responsive minWidth={768} className="responsive-grid">
      <div className="container">
        <Grid className="left-col">          
          <Grid.Column>
            <Logo />
            <Grid
              textAlign="center"
              verticalAlign="middle"
              className="padit"
            >
              <Grid.Column className="formcontainer-second">
                <Header as="h4" className="header-text" textAlign="left">
                  {t('LOGIN-TO-SG-ACCOUNT')}
                </Header>                  
                <Form size="large">
                  <TextField
                    id="outlined-multiline-flexible"
                    label={t("Email")}
                    variant="outlined"
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                    fullWidth
                    placeholder="farmer@gmail.com"
                    name="email"
                    value={values.email}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    autoComplete="off"
                    error={values.emailError}
                    helperText={values.emailError ? t('invalid-email') : ''}
                  />
                  <p ref={emailLabel} className="label"></p>
                  <div className="password">
                    <Password
                      onBlur={handlePasswordBlur}
                      onFocus={handlePasswordFocus}
                      onChange={handleChange}
                      isError={values.passwordError}
                      name="password"
                    />
                  </div>
                  <p ref={passwordLabel} className="label"></p>
                  { values.serverError &&
                    <Message negative>
                      <Message.Header>{t('server-error-header')}</Message.Header>
                      <p>{values.errorMessage ? values.errorMessage : t('server-error-message')}</p>
                    </Message>
                  }                  
                  <div className="submit-div flex end">
                    <span><a href="/forgotPassword">{t('Forgot-Password')}?</a></span>
                    <Button color="green" fluid size="large" onClick={handleSubmit}>
                      {t('LOGIN')}
                    </Button>
                  </div>                  
                </Form>
                <div className="m5">
                  <Header as="h4" className="header-text" textAlign="left">
                    {t("LET'S-GET-STARTED")}
                  </Header>                  
                  <Form size="large">                                      
                    <TextField
                      id="outlined-multiline-flexible-email"
                      label={t("Enter-Your-Email-ID")}
                      variant="outlined"                          
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                      fullWidth
                      placeholder="farmer@gmail.com"
                      name="signupEmail"
                      value={values.signupEmail}
                      autoComplete="off"
                    />
                    <div className="checkbox-div">
                      <FormControlLabel
                        control={<GreenCheckbox checked={values.conditionsChecked} onChange={(e) => handleChange(e.target.name, e.target.checked)} name="conditionsChecked" value={values.conditionsChecked}/>}
                        label={t(`I agree with processing of my personal data in conformity with the Privacy Policy. When clicking on "Get Started", you also agree with the End User License Agreement.`)}
                      />
                    </div>
                    <div className="flex end signup-div">
                      <Button fluid size="large" onClick={handleSignup} disabled={!values.conditionsChecked}>
                        {t('SIGN-UP')}
                      </Button>
                    </div>
                  </Form>                  
                </div>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          </Grid>
          <Grid className="right-col">
            <Grid.Column className="right-image-container">
              <div className="imagesection"></div>
            </Grid.Column>          
          </Grid>
      </div>
    </Responsive>
  ); 
}

export default withRouter(LoginForm);
