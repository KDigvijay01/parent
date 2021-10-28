import React, { useState } from 'react';
 
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createPost } from '../../actions/post'


const Form=()=>{
    const classes=useStyles()
    const [postData, setPostData]=useState({ creator:'', title:'', message:'', tags:'', selectedFile:''});
   
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createPost(postData));
        console.log(postData)
    }

    const clear=()=>{

    }


    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate >
                <Typography varient="h6">Creating A Memory</Typography>
                <TextField name="creator" label="Creator" variant="outlined"  fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator:e.target.value})}  />
                <TextField name="title" label="Title" variant="outlined"  fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title:e.target.value})}  />
                <TextField name="message" label="Message" variant="outlined"  fullWidth value={postData.message} onChange={(e)=>setPostData({...postData, message:e.target.value})}  />
                <TextField name="tags" label="Tags" variant="outlined" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags:e.target.value})}  />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 })=> setPostData({...postData, selectedFile:base64})}/></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth onClick={ handleSubmit }>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={ clear } fullWidth >Clear</Button>
            </form>

        </Paper>
    )
}

export default Form;
