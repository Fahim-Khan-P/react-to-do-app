import React from 'react';
import { FaTrash } from "react-icons/fa"

import styles from "./TodoItem.module.css"


class TodoItem extends React.Component {

  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }


  render() {

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    // this.props.todo.completed should be replaced with completed and so on.
    //  we've destructured the state components
    const { completed, id, title } = this.props.todo;

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}

            // before destructure it was  checked={this.props.todo.completed} 
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button 
          onClick={() => this.props.deleteTodoProps(id)}> 
          <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
          </button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={e => {
            this.props.setUpdate(e.target.value, id)
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    )
  }
}

export default TodoItem;