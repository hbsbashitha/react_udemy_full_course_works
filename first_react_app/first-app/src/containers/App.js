import React,{Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'



class App extends Component {

  state=({
      Person:[{ id:'bh1',Name:'Max',Age:'28'},
      {id:'bh2',Name:'Manu',Age:'29'},
      {id:'bh3',Name:'Stephanie',Age:'26'}],

      Status:false

    })

    deletePerson = (index) => {
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

 let person=null;

  if (this.state.Status) {
    person=(
      <div>

        <Persons 
        person={this.state.Person}  
        delete={this.deletePerson} 
        changed={this.eventHandler}/>

      </div> 
    ) }

  return(


<div className={classes.App}>
      
      <Cockpit
      title={this.props.title}
      person={this.state.Person}
      status={this.state.Status}
      switchToUsers={this.switchToUsers}/>
      {person}
    </div>

  )
  }
}
export default (App);