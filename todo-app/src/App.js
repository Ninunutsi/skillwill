import './App.css';
import Todo from './todo'
import { Component } from 'react';
// aqedan iwyeb ed
class App extends Component{

  state = { 
    tasks: [{text: 'Enter Text...'}],
  }

  addUser = () => {
    const tasks = [...this.state.tasks]
    tasks.push({text: 'Enter To Do Task...'})
    this.setState({tasks})
  }

  removeUser = (index) => {
    const tasks = [...this.state.tasks]
    tasks.splice(index, 1)
    this.setState({tasks})
  }

  inputOnClick = (index) => {
    const tasks = [...this.state.tasks]
    let task = tasks.splice(index, 1)[0]
    this.setState({tasks})
  }

  onInputChange = (event, index) => {
    const tasks = [...this.state.tasks]
    tasks[index] = {
      text: event.target.value
    }
    // input is mnishvneloba
    {console.log("inputis mnishvneloba:  " + event.target.value)}
    this.setState({tasks})
    
  }
  
  render() {
    return (
      <div className="App">
        
        {this.state.tasks.map((user,index) => {
           return <Todo 
           key={index} 
           removeUser={() => this.removeUser(index)}
           inputOnClick={this.inputOnClick}
           onInputChange={this.onInputChange}
           addUser={this.addUser}/>
        })}
      </div>
    );
  }
}

export default App;

