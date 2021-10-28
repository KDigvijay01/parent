import React, {useState} from 'react';


const ContactCard=()=>{
    const [date,setDate]=useState('Date comes here');

    const changeToDate=()=>{
        const today=new Date();
        setDate(today.toDateString());
    }

    return (
        <div className="ui container">
            <h2>{date}</h2>
            <button className="ui button green" onClick={changeToDate}>~</button>
        </div>
    )
}

export default ContactCard;