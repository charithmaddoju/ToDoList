import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }

    createTask = (newTask) => {
        const updatedTodos = [...this.state.todos, newTask];
        this.setState({ todos: updatedTodos });
    }


    
    render(){
        return(
            <div>
                <NewTodoForm createTask={this.createTask} />
                <ul>
                    {this.state.todos.map((todo,index) => (
                        <li key={index}>{todo.task}</li>
                    ))}
                </ul>
            </div>

        )
    } 
}

export default TodoList;