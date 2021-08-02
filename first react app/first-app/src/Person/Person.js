import React from 'react';
import './Person.css';

const person = (props)=>{
    return(
        <div className="Person">
            <h1 onClick={props.click}>my name is {props.name} and my age is {props.age} specially {props.children}</h1>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;