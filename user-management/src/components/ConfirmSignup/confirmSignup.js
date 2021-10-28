import React from "react";
import { Button, Header, Grid, Responsive } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../common/Logo";
import Sparkles from '../../images/sparkles.png';
import Tick from '../../images/tick.png';
import * as loading from './loading-app.json'
import './confirmSignup.scss';


const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};



const ConfirmSignup = function (props) {
  const { t } = useTranslation();
  return (
    <Responsive minWidth={768}>
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
        <div className="tickImageContainer">
          <div className="sparkles" >
            <img src={Sparkles} alt="Sparkles" height="250px" width="350px" />
          </div>
          <div className="tick">
            <img src={Tick} alt="Sparkles" height="140" width="140" />
          </div>
        </div>
        <Header className="error-page-header" as="h3">

          <p className="signup-message">{t('confirm-signup-message')}</p>
          <>
            <br></br>
          </>
            {/*<hr/>*/}
            <p className="email-message">{t('confirm-email-message')}</p>
        </Header>
        <Button className="revert-button" size="massive" onClick={() => props.history.push('/')}>
          {t('GO TO DASHBOARD')}
        </Button>
      </div>
    </Responsive>
  );
}

export default withRouter(ConfirmSignup);
