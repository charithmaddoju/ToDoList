import React, {Component} from "react";

class Todo extends Component{
    
    handleDelete = () => {
        this.props.updateTodos(this.props.task);
    }
    
    render(){
        return(
            <div>
                <li>{this.props.task}</li>
                <button>Edit</button>
                <button onClick={this.handleDelete}>X</button>
            </div>
        )
    }
}

export default Todo;