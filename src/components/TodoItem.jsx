import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#ccc",
      padding: "10px",
      borderBottom: "1px solid #f4f4f4",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()} className="col-12">
        <div style={{display: 'flex'}}>
          <div>
            <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)}
            />{" "}
            {title}
          </div>
          <button
            className="btn btn-danger"
            onClick={this.props.deleteTodo.bind(this, id)}
            style={{marginLeft: 'auto'}}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
