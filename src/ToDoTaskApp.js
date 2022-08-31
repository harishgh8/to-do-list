import React, { useState } from "react";
import "./style.css";

const ToDoTaskApp = () => {
  const today = new Date().toLocaleDateString();
  //   create an array of state that holds input task
  const [toDoTask, setToDoTask] = useState([
    "milk",
    "honey",
    "mangoes",
    "potato",
    "tomato",
    "chillies",
    "green-pepper",
  ]);

  //   function to add to list
  const addToList = (tasks) => {
    if (tasks == "") {
      return;
    }
    setToDoTask([...toDoTask, tasks]);
  };
  // function to delete from list
  const deleteTasks = (tasks) => {
    // indexOf (start, end) if
    const deletedTaskIndex = toDoTask.indexOf(tasks);
    setToDoTask([
      ...toDoTask.slice(0, deletedTaskIndex),
      ...toDoTask.slice(deletedTaskIndex + 1),
    ]);
  };

  return (
    <>
      <h1 className="header">Todo Task List for {today} </h1>
      <TaskAdd addToList={addToList} setToDoTask={setToDoTask} />
      <TaskList
        deleteTasks={deleteTasks}
        toDoTask={toDoTask}
        setToDoTask={setToDoTask}
      />
    </>
  );
};

export default ToDoTaskApp;

// component for adding task
const TaskAdd = ({ addToList, setToDoTask }) => {
  const [input, setInput] = useState("");
  //   get the input text
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  // add the input text to the existing list by callback
  const handlSubmit = () => {
    addToList(input);
    setInput("");
  };

  return (
    <>
      <span>
        <input type="text" onChange={handleChange} value={input} />
        <button className="add_btn" onClick={handlSubmit}>
          Add
        </button>
      </span>
    </>
  );
};

// component for display and delete tasks
const TaskList = ({ deleteTasks, toDoTask }) => {
  return (
    <>
      <ol>
        {toDoTask.map((lists, index) => (
          <EachTasks lists={lists} deleteTasks={deleteTasks} key={index} />
        ))}
      </ol>
    </>
  );
};

const EachTasks = ({ deleteTasks, lists }) => {
  const timeStamp = new Date().toLocaleTimeString();
  const handlSubmit = () => {
    deleteTasks(lists);
  };
  return (
    <>
      <li className="list_task">
        <span>({timeStamp}) </span>
        {lists}

        <button className="del_btn" onClick={handlSubmit}>
          Del
        </button>
      </li>
    </>
  );
};
