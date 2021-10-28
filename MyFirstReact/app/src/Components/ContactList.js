import React, {useState} from 'react';
import { Component } from 'react';

import './ContactList.css';

const ContactList=()=>{
    let today=new Date();
    const [time, setTime]=useState(today.toString())

    const changeTime=()=>{
        const today=new Date();
        setTime(today.toString())
    }
    return (
        <div className="ui celled list">
            <div className="ui conation">
                <h1>Time</h1>
            </div>
        </div>
    )
}

export default ContactList;