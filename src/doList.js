import React, {Component} from 'react';

class DoList extends Component{

	addTodo = (e) => {
					e.preventDefault();
					const newTask = document.getElementById('todoInput').value.trim();
					
					if(newTask == '' || newTask.length <1 ){
						alert('enter a task');
					}else{
						this.props.addNewTask({todo:newTask});
					}
					
					document.getElementById('todoInput').value = '';
				}

removeTodo = (e)=>{
					let id = e.target.id;
					
					this.props.removeTask(id);
				}

		render(){

const todos = this.props;


const todosList = todos.todo.tasks.map(todo =>  (<div key={todo.id + 1} className='collection-item'><div> {todo.todo}</div ><div className='divider'></div> <div id={todo.id} onClick={this.removeTodo} className='right-align green-text col s4'>DONE?</div></div> ));

		return(

		
				<div className='container'> 

				<h1 className='center blue-text'>ArDo</h1>
				<h3 className='center'>Here you are:</h3>

				<div className='container collection'> {todosList} </div>

				<div><form  onSubmit = {this.addTodo} > <input type='text' id='todoInput' placeholder='add a new task'  /><button className='btn-large right '> TO DO </button></form></div>


				</div>
				)
}
}
	
export default DoList;