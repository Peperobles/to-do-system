import React, { Component } from "react";

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }



  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit} style={{ display: "flex", width: '100%' }}>
          <input 
            type="text" 
            name="title" 
            placeholder="Add Todo..." 
            style={{flex: '10', padding: '5px'}}
            value={this.state.title}
            onChange={this.onChange}
            />
          <button type="submit" className="btn btn-primary" style={{flex: '1'}}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
