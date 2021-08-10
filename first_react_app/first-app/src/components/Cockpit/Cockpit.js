import React from 'react';
import classes from './Cockpit.module.css'



const cockpit=(props)=>{

    let btnclass='';
    let assignedClasses=[];

    if(props.person.length<=2){
      assignedClasses.push(classes.red);
    }
    if(props.person.length<=1){
      assignedClasses.push(classes.bold);
    }


    if (props.status) {
        btnclass=classes.Red;
    }



    return(
      <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnclass} onClick={props.switchToUsers}>Switch Name</button>
      </div>
    )
}

export default cockpit;