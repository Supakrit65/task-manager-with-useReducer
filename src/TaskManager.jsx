import React from "react";
import { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Define the initial state for the Task Manager
const initialState = {
  tasks: [], // An array to hold all the tasks added by the user
  title: "", // The title of the task currently being added
  description: "", // The description of the task currently being added
};

// Define the reducer function to update the state based on user actions
function reducer(state, action) {
  switch (action.type) {
    // If the action is to set the list of tasks, update the tasks array in the state with the new value
    case "SET_TASK":
      return { ...state, tasks: action.payload };
    // If the action is to set the title of the task, update the title field in the state with the new value
    case "SET_TITLE":
      return { ...state, title: action.payload };
    // If the action is to set the description of the task, update the description field in the state with the new value
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    // If the action is to reset the input fields, set the title and description fields in the state to empty strings
    case "RESET_INPUT":
      return { ...state, title: "", description: "" };
    // If the action type is unknown, throw an error
    default:
      throw new Error();
  }
}

export default function TaskManager() {
  // State variables to keep track of tasks, title, and description
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to add a new task to the list
  const addTask = () => {
    if (state.title.trim() !== "" && state.description.trim() !== "") {
      const newTask = { title: state.title, description: state.description };
      dispatch({ type: "SET_TASK", payload: [...state.tasks, newTask] });
      dispatch({ type: "RESET_INPUT" });
    } else {
      alert("Title and description cannot be empty.");
    }
  };

  // Function to update an existing task in the list
  const updateTask = (index, title, description) => {
    const newTasks = [...state.tasks];
    newTasks[index] = { title, description };
    dispatch({ type: "SET_TASK", payload: newTasks });
  };

  // Function to delete a task from the list
  const deleteTask = (indexOfTask) => {
    const tasksAfterDeletion = [...state.tasks];
    tasksAfterDeletion.splice(indexOfTask, 1);
    dispatch({ type: "SET_TASK", payload: tasksAfterDeletion });
  };

  return (
    <div className="container my-5">
      {/* Task Manager header */}
      <h1 className="text-center mb-5">Task Manager</h1>
      {/* Form to add a new task */}
      <div className="row mb-3">
        {/* Input field for the task title */}
        <div className="col-md-4">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={state.title}
            onChange={(e) =>
              dispatch({ type: "SET_TITLE", payload: e.target.value })
            }
          />
        </div>
        {/* Input field for the task description */}
        <div className="col-md-8">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={state.description}
            onChange={(e) =>
              dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })
            }
          />
        </div>
      </div>

      {/* Button to add a new task */}
      <div className="row mb-3">
        <div className="col text-end">
          <button className="btn btn-primary" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
      {/* List of tasks */}
      <ul className="list-group">
        {/* Map over tasks array to render each individual task */}
        {state.tasks.map((task, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            {/* Display task title and description */}
            <div>
              <h5 className="mb-1">{task.title}</h5>
              <p className="mb-0">{task.description}</p>
            </div>
            {/* Buttons to update and delete task */}
            <div>
              <button
                className="btn btn-outline-primary me-3"
                onClick={() =>
                  updateTask(
                    index,
                    prompt("Enter updated title", task.title),
                    prompt("Enter updated description", task.description)
                  )
                }
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
