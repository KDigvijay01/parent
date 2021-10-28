import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, Grid, Header, Message } from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import Logo from "../common/Logo";
import HttpService from "../../services/HttpService";
import { useTranslation } from "react-i18next";


const ForgotPassword = (props) => {
  const { t } = useTranslation();

  const [values, setValues] = useState({
    email: '',    
    emailError: false,    
    serverError: false,
    errorMessage: '',
    forgotPasswordSuccess: false
  });

  const emailLabel = React.createRef();

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, emailError: false, serverError: false, errorMessage: '' }); 
    if (validateForm()) {
      const { email } = values;
      try {
        const response = await HttpService.post('/forgotPassword', { email });
        if (response && response.status === 200) {
          setValues({ ...values, forgotPasswordSuccess: true }); 
        }
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
    const { email } = values;
    let emailErr = false;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {      
      emailErr = true;; 
    }
    setValues({ ...values, emailError: emailErr });
    return !emailErr;
  };

  const handleEmailFocus = e =>
    (emailLabel.current.innerText = "Enter your Email address");

  const handleEmailBlur = e => (emailLabel.current.innerText = "");
  
  return (
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
                  {t('forgot-password-header')}
                </Header>                  
                <Form size="large">
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
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
                  { values.serverError &&
                    <Message negative>
                      <Message.Header>{t('server-error-header')}</Message.Header>
                      <p>{values.errorMessage ? values.errorMessage : t('server-error-message')}</p>
                    </Message>
                  }
                  { values.forgotPasswordSuccess &&
                    <Message positive>
                      <Message.Header>{t('Email sent successfully.')}</Message.Header>
                      <p>{values.errorMessage ? values.errorMessage : t('You may now click on the link in email to reset your password.')}</p>
                    </Message>
                  }
                  <div className="submit-div flex end">
                    {!values.forgotPasswordSuccess &&
                    <Button color="green" fluid size="large" onClick={handleSubmit}>
                      {t('submit')}
                    </Button>
                    }
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
  ); 
}

export default withRouter(ForgotPassword);
