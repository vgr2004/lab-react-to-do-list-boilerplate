import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTask: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleAddTask = () => {
    if (this.state.newTask.trim() !== "") {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, this.state.newTask],
        newTask: "",
      }));
    }
  };

  handleUpdateTask = (index, updatedTask) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks[index] = updatedTask;
    this.setState({
      tasks: updatedTasks,
    });
  };

  handleDeleteTask = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks.splice(index, 1);
    this.setState({
      tasks: updatedTasks,
    });
  };

  render() {
    return (
      <div className="app-container">

        <h1>To-Do List</h1>
        <div>
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleInputChange}
            placeholder="Enter task"
          />
          <button id="add"
           onClick={this.handleAddTask}>Add Item</button>
        </div>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              <input
                type="text"
                value={task}
                onChange={(e) => this.handleUpdateTask(index, e.target.value)}
              />
              <button onClick={() => this.handleDeleteTask(index)}>
                Delete Item
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;