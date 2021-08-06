import React from 'react';


const userInput=(props) =>{

    const inputStyles= {
        width:'10%',
        margin:'auto',
        color:'red',
        backgroundColor:'green',
        textAlign:'center'

    };
    return(
        
            <div>
                <input style={inputStyles} onChange={props.changed} type="text" value={props.name} />
            </div>
        
    )
}

export default userInput;