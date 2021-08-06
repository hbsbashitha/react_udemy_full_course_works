import React from 'react';
import classes from './Person.module.css';

const person = (props)=>{

    return(
        <div className={classes.person}> 
            <p onClick={props.delete}>I'm {props.name} and I'm {props.age} years old!</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default (person);