import React, { useState } from "react";
import "./AddTask.css";

const AddTask = (props) => {
  const [getTitle, setTitle] = useState("");
  const [getDescription, setDescription] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
    console.log(`Title is : ${event.target.value}`);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
    console.log(`Description is : ${e.target.value}`);
  };

  // const [task, setTask] = useState({
  //     title: "",
  //     description: "",
  // });

  //Jyada code kyun likhna ,  jab dimag lagaake ye kiya ja skta tha

  // const handleInputChange = (event) => {
  //     // console.log(event.target.name);
  //     setTask({
  //         ...task,
  //         [event.target.name] : event.target.value,
  //     });

  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    // alert(`Form Submitted with Title :  ${task.title} and Description : ${task.description}`)

    // console.log(task);
    props.onAddingTask(getTitle, getDescription);

    //Resetting the input fields
    setTitle("");
    setDescription("");
  };

  return (
    <div className="addTaskForm">
      <h3 className="addNewTask">Add New Task</h3>

      <form onSubmit={handleSubmit}>
        <div className="TitleSection">
          <h3>
            <label>Title</label>
          </h3>
          <input
            type="text"
            name="title"
            placeholder="Task title"
            className="inputTitle"
            onChange={handleTitle}
            value={getTitle}
          />
        </div>

        <div className="descriptionSection">
          <h3>
            <label>Description</label>
          </h3>
          <textarea
            rows="2"
            className="inputDescription"
            spellCheck="false"
            placeholder="Task Description"
            name="description"
            onChange={handleDescription}
            value={getDescription}
          />
        </div>

        <div>
          <button className="submitButton">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
