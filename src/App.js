
import React, {Component} from 'react';

import DoList from './doList';

class App extends Component{

  state = {tasks: [{id:1, todo:'task one to do'},{id:2,todo:'task two to do'}]};

  

  addNewTask = (newTask) =>{

    newTask.id = Math.random();

    let tasks = [...this.state.tasks, newTask];

    this.setState({
      tasks
    })

  }
  
  removeTask = (id) =>{

    let tasks = this.state.tasks.filter(task => (task.id != id));
    this.setState({
          tasks
    })
  }

  render(){
    return(
 <div className="App container">
      

      <DoList todo={this.state} addNewTask ={this.addNewTask} removeTask ={this.removeTask} />
    </div>

      )
  }
}



export default App;
