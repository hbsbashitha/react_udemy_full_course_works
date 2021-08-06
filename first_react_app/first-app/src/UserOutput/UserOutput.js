import React from 'react';
import './UserOutput.css'

const UserOutput=(props) =>{


    


    return(
        <div>
            <div className="container">
            <p>I'm {props.name} and I am {props.age} years old!</p>
            
            </div>
        </div>

    )
}

export default UserOutput;