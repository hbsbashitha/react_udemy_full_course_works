
import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state=({
      Person:[{ id:'bh1',Name:'Max',Age:'28'},
      {id:'bh2',Name:'Manu',Age:'29'},
      {id:'bh3',Name:'Stephanie',Age:'26'}],

      Status:false

    })

    deletePerson = (index) => {
      // const persons = this.state.Person.slice();
      const persons = [...this.state.Person]
      persons.splice(index,1);
      this.setState({Person: persons});

    }

  switchToUsers= () => {
   
    const tempStatus=this.state.Status;
    this.setState({Status:!tempStatus});
    
  };
  eventHandler=(event,id)=> {
    
    const personIndex=this.state.Person.findIndex(p=>{
      return p.id===id;

    });

    const per={...this.state.Person[personIndex]};
 
    per.Name=event.target.value;
   

    const pers=[...this.state.Person];
    pers[personIndex]=per;
    

    this.setState(
      {
     Person:pers
  
      }
    );
  }

 
  

render(){
  const styles={
    background:'green',
    color:'white',
    font:'inherit',
    border:'1px solid blue',
    padding:'8px',
    cursor:'pointer'
  };


  let person=null;

  if (this.state.Status) {
    person=(
      <div>
        {this.state.Person.map((person,index)=>{
          return (<Person name={person.Name}
             age={person.Age}
              delete={()=>this.deletePerson(index)} 
              key={person.id} 
              changed={(event) => this.eventHandler(event,person.id)}/>)
        })}
      </div> 
    )

    styles.background='red';
    }


      let classes=[];

      if(this.state.Person.length<=2){
        classes.push('red');
      }
      if(this.state.Person.length<=1){
        classes.push('bold');
      }
  return(


<div className="App">
      
      <h1>Hi,I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button style={styles} onClick={this.switchToUsers}>Switch Name</button>
      {person}
    </div>

  )
  }
}


export default (App);