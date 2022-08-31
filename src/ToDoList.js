import React, { useState } from "react";
import style from "./style.css";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState(["milk", "carrots", "lemons"]);
  const addTodo = (list) => {
    setToDoList([...toDoList, list]);
  };

  const deleteList = () => {};
  return (
    <div id="app">
      <h2 id="header">To do list</h2>
      <ToDoInput addTodo={addTodo} />
      <ListOfToDo toDoList={toDoList} />
    </div>
  );
};

const ToDoInput = ({ addTodo }) => {
  const [inputState, setInputState] = useState([
    "milk",
    "banana",
    "coke",
    "lemons",
  ]);
  const handleChange = (e) => {
    setInputState(e.target.value);
  };
  const propToparent = (e) => {
    addTodo(inputState);
    setInputState("");
  };

  return (
    <div id="to-do-input">
      <input type="text" onChange={handleChange} />
      <button id="input__submit" onClick={propToparent}>
        Add to the list
      </button>
    </div>
  );
};

const ListOfToDo = ({ toDoList, deleteList }) => {
  return (
    <ol id="list">
      {toDoList.map((lists, index) => (
        <listDo toDoList={lists} deleteList={deleteList} key={index} />
      ))}
    </ol>
  );
};

const listDo = ({ toDoList, deleteList }) => {
  const handleDelete = (event) => {
    deleteList(toDoList);
  };
  return (
    <li>
      <span></span> {toDoList + " "}
      <button id="delete_btn" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
export default ToDoList;
