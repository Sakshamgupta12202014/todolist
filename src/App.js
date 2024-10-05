import React from "react";
import "./App.css";
import { useState } from "react";
import Task from "./Tasks/Task.js";
import AddTask from "./AddTasks/AddTask.js";

function App() {
  const addNewTasks = (title, description) => {
    if (title.trim() !== "" && description.trim() !== "") {
      return setTaskList([
        ...taskList,
        { title: title, description: description },
      ]);
    } else if (title.trim() !== "" && description.trim() === "") {
      alert("please fill the description!!");
    } else if (title.trim() === "" && description.trim() !== "") {
      alert("please fill the title section!!");
    } else {
      alert("please fill title & description in order to add task");
    }
  };

  const [taskList, setTaskList] = useState([]);

	

  return (
    <div className="parentComponent">
      <h1 className="mainHeading">To Do List</h1>
      <div>
        <button
          className="addTask"
          onClick={(e) => {
            // setTaskList(
            //     [...taskList,
            //     {title : "Go to mess", description : "Eating mess food is healthy", date : new Date()}
            //     ]
            // );
          }}
        >
          Add Task
        </button>

        <AddTask onAddingTask={addNewTasks} />
        <div className="cards">
          {taskList.map((task) => (
            <Task task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

// class App extends React.Component {

//     state = {
//         taskCount : 0,
//     }

//     render() {
//         return(
//             <div className='parentComponent'>
//                 <h1 className='mainHeading'>To Do List</h1>
//                 <div>
//                     <button className='addTask' onClick={(e) => {
//                         this.setState({...this.state, taskCount : this.state.taskCount + 1});
//                         console.log(this.taskCount);
//                     }} >Add Task</button>

//                     <p>The number of tasks are : {this.state.taskCount}</p>
//                 </div>
//             </div>
//         )
//     }
// }
