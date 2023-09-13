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

    remove = (task) => {
        const updatedTodos = this.state.todos.filter(todo => todo.task !== task);
        this.setState({ todos: updatedTodos });
    }

    update = (oldTask, newTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.task === oldTask){
                return {...todo, task: newTask};
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }

    render(){
        return(
            <div>
                <NewTodoForm createTask={this.createTask} />
                <ul>
                    {this.state.todos.map(todo => (
                        <Todo task={todo.task} remove = {this.remove}
                        update = {this.update}
                        />
                    ))}
                </ul>
            </div>

        )
    } 
}

export default TodoList;