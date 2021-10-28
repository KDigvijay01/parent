import React, { useState } from "react";
import { Button, Form, Grid, Header, Message, Responsive } from "semantic-ui-react";
import "./Signup.scss";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Password from "../common/Password";
import Logo from "../common/Logo";
import HttpService from "../../services/HttpService";
import { useTranslation } from "react-i18next";



const SignupForm = (props) => {
  const { t } = useTranslation();
  const [values, setValues] = useState({
    email: props.email || '',
    name: '',
    password: '',
    confirmPassword: '',
    phone: '',
    serverError: false,
    emailError: false,
    passwordError: false,
    confPasswordError: false,
    phoneError: false,
    errorMessage: ''
  });
  const emailLabel = React.createRef();
  const passwordLabel = React.createRef();
  const confPasswordLabel = React.createRef();
  const phoneLabel = React.createRef();


  const handleSignup = async (event) => {
    console.log("next butto is clickked")
    event.preventDefault();
    setValues({ ...values, phoneError: false, emailError: false, passwordError: false, serverError: false, confPasswordError: false, errorMessage: '' });
    if (validateForm()) {
      const { email, password, phone, name } = values;
      try {
        const response = await HttpService.post('/signup', { email, password, phone, name });

        console.log("This is the response",response);

        if (response.status === 200) {
          props.history.push("/confirmSignup");
        }
      }
       catch (err) {
        console.log("This is the errr....",err);
        setValues({ ...values, serverError: true });
        if (err.response && err.response.data && err.response.data.message) {
          setValues({ ...values, serverError: true, errorMessage: err.response.data.message });
        }
      }
    }
    else{
      
      console.log("the form is not validated.......")
    }
  };

  const validateForm = () => {
    const { email, password, confirmPassword, phone, name } = values;
    let emailErr = false, passWordErr = false, confPasswordErr = false, phoneErr = false, nameErr = false;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      console.log("not a valid email.....");
      emailErr = true;;
    }
    if (!phone && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/./0-9]*$/.test(phone)) {
      console.log("not a valid phone.....");
      phoneErr = true;
    }
    if (!password || password.length < 7 ) {
      console.log("not a valid password....");
      passWordErr = true;
    }
    if(!name || !name.trim().length >=3) {
      console.log("not a valid name.....");
      nameErr = true;
    }

    if (!confirmPassword || password !== confirmPassword) {
      console.log("not a valid confirm password.....");
      confPasswordErr = true;
    }
    setValues({ ...values, emailError: emailErr, passwordError: passWordErr, confPasswordError: confPasswordErr, phoneError: phoneErr });
    // TODO add phone validation
    return (!emailErr && !passWordErr && !confPasswordErr && !phoneErr && !nameErr);
  };

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleBack = () => {
    props.history.push('/');
  };

   const handleEmailFocus = e =>
    (emailLabel.current.innerText = "Enter your Email address");

  const handleEmailBlur = e => (emailLabel.current.innerText = "");


  const handlePasswordFocus = e =>
    (passwordLabel.current.innerText = "Enter your Password");

  const handlePasswordBlur = e => (passwordLabel.current.innerText = "");

  const handleConfPasswordFocus = e =>
    (confPasswordLabel.current.innerText = "Confirm your Password");

  const handleConfPasswordBlur = e => (confPasswordLabel.current.innerText = "");

  const handlePhoneBlur = e => (phoneLabel.current.innerText = "");

  const handlePhoneFocus = e => (phoneLabel.current.innerText = "Enter your Phone Number")


  return (
    <Responsive minWidth={768}>
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
                <Header as="h3" textAlign="left" className="heading">
                  {t('ENTER-YOUR-DETAILS')}
                </Header>
                <Form size="large">
                  <TextField
                    id="outlined-multiline-flexibles"
                    label={t('Name')}
                    variant="outlined"
                    fullWidth
                    value={values.name}
                    placeholder="John Doe"
                    name="name"
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
                      value={values.password}
                      name="password"
                      onChange={handleChange}
                      isError={values.passwordError}
                      
                      helperText={values.passwordError ? t('invalid-password') : ''}
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
                 
                  <TextField
                    id="outlined-multiline-flexible"
                    label={t("Phone-Number")}
                    variant="outlined"
                    onBlur={handlePhoneBlur}
                    onFocus={handlePhoneFocus}
                    fullWidth
                    placeholder={t("Phone-Number")}
                    // className="contact"
                    value={values.phone}
                    name="phone"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    autoComplete="off"
                    error={values.phoneError}
                    // isError={values.phoneError}
                    helperText={values.phoneError ? t('invalid-phone-number') : ''}
                  />
                  <p ref={phoneLabel} className="label"></p>
                  {values.serverError &&
                    <Message negative>
                      <Message.Header>{t('server-error-header')}</Message.Header>
                      <p>{values.errorMessage ? values.errorMessage : t('server-error-message')}</p>
                    </Message>
                  }
                  <div className="submit-div flex start">
                    <Button

                      size="small"
                      className="white"
                      onClick={handleBack}
                    >
                      {t('back')}
                    </Button>
                    <Button size="small" onClick={handleSignup} className="next-button">
                      {t('next')}
                    </Button>
                  </div>
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
    </Responsive>
  );
}

export default withRouter(SignupForm);
