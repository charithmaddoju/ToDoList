import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.createTask(this.state);
        this.setState({ task: "" });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Todo : </label>
                <input
                    type='text'
                    placeholder='New Todo'
                    id='task'
                    value={this.state.task}
                    name = 'task'
                    onChange = {this.handleChange}
                />
                <button>Add todo</button>
            </form>
        )
    } 
}

export default NewTodoForm