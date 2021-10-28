import React from "react";
import { Button, Header, Grid } from "semantic-ui-react";
import "./Errorpage.scss";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../common/Logo";

const ErrorPage = function (props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex">
        <Grid className="left-col">          
          <Grid.Column>
            <Logo />
          </Grid.Column>
        </Grid>
        <Grid className="right-col">
          <Grid.Column>              
          </Grid.Column>          
        </Grid>                
      </div>
      <div className="error-container">
        <Header className="error-page-header" as="h3">
          {t('error-page-message')}
        </Header>
        <Button className="revert-button" color="green" size="large" onClick={() => props.history.push('/')}>
          {t('GO-BACK-TO-LOGIN')}
        </Button>
      </div>
    </>
  );  
}

export default withRouter(ErrorPage);
