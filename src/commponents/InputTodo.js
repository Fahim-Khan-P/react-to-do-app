import React from 'react';
import { FaPlusCircle } from "react-icons/fa"

class InputTodo extends React.Component {

  state = {
    title: "",
  }

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      return console.error('no title');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit">
          <FaPlusCircle
            style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
          />
        </button>
      </form>
    )
  }
}

export default InputTodo;