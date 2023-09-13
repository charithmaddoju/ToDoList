import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }

    createTask = (newTask) => {
        const updatedTodos = [...this.state.todos, newTask];
        this.setState({ todos: updatedTodos });
    }

    updateTodos = (task) => {
        const updatedTodos = this.state.todos.filter(todo => todo.task !== task);
        this.setState({ todos: updatedTodos });
    }


    
    render(){
        return(
            <div>
                <NewTodoForm createTask={this.createTask} />
                <ul>
                    {this.state.todos.map(todo => (
                        <Todo task={todo.task} updateTodos = {this.updateTodos}/>
                    ))}
                </ul>
            </div>

        )
    } 
}

export default TodoList;