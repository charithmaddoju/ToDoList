import React, { Component } from 'react';
import './NewTodoForm.css';

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
            <form
            className='NewTodoForm'
            onSubmit={this.handleSubmit}>
                <label className="form-label" htmlFor='task'>New Todo : </label>
                <input 
                    className='form-control mb-3'
                    type='text'
                    placeholder='New Todo'
                    id='task'
                    value={this.state.task}
                    name = 'task'
                    onChange = {this.handleChange}
                />
                <button className='btn btn-success'>Add todo</button>
            </form>
        )
    } 
}

export default NewTodoForm