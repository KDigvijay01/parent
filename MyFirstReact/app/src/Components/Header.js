import React, {useState} from 'react';



const Header=()=>{
    var [count, setCount]=useState(0);

    var decreaseCount= ()=> {
        setCount(count-1);
       
    }

    var increaseCount= ()=> {
        setCount(count+1);
       
    }
    return (
    <div className="ui fixed menu">
        <div className="ui container center">
            <button className="ui button red" onClick={decreaseCount}>-</button> 
            <h2>{count} </h2>
            <button className="ui button red" onClick={increaseCount}>+</button> 
       </div>
       
    </div>
    )
}
export default Header;
