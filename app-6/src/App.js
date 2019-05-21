import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super()

      this.state = {
        list: [],
        tasks: ""
      }
      this.handleAddTask = this.handleAddTask.bind(this)
    }
    
    handleInputChange(value){
      this.setState({
        input: value
      })
    }

    handleAddTask(){
      this.setState({
        list: [...this.state.list, this.state.input],
      input:""
      })
    }
    
    render() {
     let list = this.state.list.map((e,index) => {
       return <Todo key={index} task={e}/>; //Maps each elements into it's own component (Todo)
     });

      return (
        <div className="App">
          <h1>My to-do list</h1>
          <div>
          <input value={this.state.input} 
          placeholder="Enter new task" 
          onChange = {event => this.handleInputChange(event.target.value)} type="text"></input>
          <button onClick={this.handleAddTask}>Add</button>
        </div>
        <br/>
        {list}
        </div>
      )
    }
  }
  
  
  
  

export default App;
