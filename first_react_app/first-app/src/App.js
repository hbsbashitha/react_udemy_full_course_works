 import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

 const App=(props) => {

  const styles = {
    backgroundColor:'green',
    font:'inherit',
    border:'1px solid blue',
    padding:'8px',
    cursor:'pointer'
  }

  const [personState, setPersonState] = useState({
    person:[
      
      {name:'bhashitha', age:44},
      {name:'sadeepa', age:21},
      {name:'ranaginge', age:33}

    ],


  })

  const [otherState, setOtherState] = useState('some other value')
  console.log(personState,otherState)

  const switchNameHandler = (newName)=>{

    setPersonState({
      person:[
        {name:newName, age:21},
        {name:'bhashitha', age:44},
        {name:'ranaginge', age:33}
  
      ],
      
      
    })
  }
  const changeName=(event)=> {

    setPersonState({
      person:[
        
        {name:'bhashitha', age:44},
        {name:event.target.value, age:21},
        {name:'ranaginge', age:33}
  
      ],
  })

     
  }


  return (
    <div className="App">
      <h1> About person information</h1>
      <Person 
        click={switchNameHandler}
        name={personState.person[0].name} 
        age={personState.person[0].age}
        />
      <Person  
        click={switchNameHandler} 
        name={personState.person[1].name} 
        age={personState.person[1].age}
        changed={changeName}/>

      <button style={styles} onClick={switchNameHandler.bind(this,'bbbbbbbb')}> click me</button>
    </div>
  );
}


export default App;
