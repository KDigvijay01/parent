import React, { useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/post';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles';



const  App=()=> {
 

  const add="https://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Images-icon.png"
  const classes=useStyles();
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getPosts())
    console.log("useEffect is called.");
},[dispatch])
  
  

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">Memories</Typography>
        <img className={classes.image} src={add} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
              <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
              <Form />
          </Grid>
        
        </Grid>

      </Grow>
    
    </Container>
  );
}

export default App;
