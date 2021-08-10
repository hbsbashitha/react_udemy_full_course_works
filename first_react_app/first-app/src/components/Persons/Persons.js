import React from 'react';
import Person from './Person/Person';

const persons= (props) =>
    props.person.map((person,index)=>{
        return  <Person 
        delete={()=>props.delete(index)}
        name={person.Name}
           age={person.Age}
           key={person.id}
           change={(event) => props.changed(event,person.id)}/>
        
      });


export default persons;