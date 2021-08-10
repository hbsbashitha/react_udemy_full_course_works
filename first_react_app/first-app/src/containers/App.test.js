
import React,{Component} from 'react';
import './App.css'
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char'

class App extends Component{

  state={
    userInput:''
  }


  inputChangeHandler=(event) =>{

    this.setState(
      {userInput:event.target.value}
    )
  }


  deleteCharacter = (index) =>{
    const text=this.state.userInput.split('');
    text.splice(index,1);
    const updatedText=text.join('');
    this.setState({userInput:updatedText});
  }
  render(){

    const charList=this.state.userInput.split("").map((ch,index)=>{
      return (<Char character={ch} key={index} delete ={()=>this.deleteCharacter(index)}/>)
    })

    return (
      <div className="App">
        <p>{this.state.userInput}</p>
        <input type='text' onChange={this.inputChangeHandler} value={this.state.userInput}/>
        <Validation length={this.state.userInput.length}/>
        {charList}
      </div>
    )
  }

}
export default App;