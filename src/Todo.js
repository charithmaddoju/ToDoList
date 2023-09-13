import React, {Component} from "react";

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
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
    
    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    <form>
                        <input type="text" value={this.state.task} 
                        name = "task"
                        onChange={this.handleChange}/>
                        <button onClick={this.handleUpdate}>Save</button>
                    </form>
                </div>
            )
        }else{
            result = (
                <div>
                    <li>{this.props.task}</li>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>X</button>
                </div>
            )
        }
        return result;
    }
}

export default Todo;