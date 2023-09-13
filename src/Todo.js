import React, {Component} from "react";
import './Todo.css';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task,
            isCompleted: false
        };
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleDelete = () => {
        this.props.remove(this.props.task);
    }

    handleEdit = () => {
        this.setState({isEditing: !this.state.isEditing});
    }

    handleUpdate = (evt) => {
        evt.preventDefault();
        this.props.update(this.props.task, this.state.task);
        this.setState({isEditing: false});
    }

    handleClick = () => {
        this.setState({isCompleted: !this.state.isCompleted});

    }
    
    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form">
                        <input type="text" value={this.state.task} 
                        name = "task"
                        onChange={this.handleChange}/>
                        <button onClick={this.handleUpdate}>Save</button>
                    </form>
                </div>
            )
        }else{
            result = (
                <div className="Todo">
                    <li className={this.state.isCompleted ? "Todo-task completed" : "Todo-task"}
                    onClick={this.handleClick}>{this.props.task}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.handleEdit} className="bi bi-trash">
                            <i className="fas fa-pen"></i>
                        </button>
                        <button onClick={this.handleDelete}>
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            )
        }
        return result;
    }
}

export default Todo;