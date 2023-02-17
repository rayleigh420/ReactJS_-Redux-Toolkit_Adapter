import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTodo, selectAll } from "./features/todoSlice";

function App() {
  const todo = {
    id: "1",
    content: "Hello my name is...",
  };

  const dispatch = useDispatch();
  const todoE = useSelector(selectAll);

  const dispathAction = () => {
    dispatch(addTodo(todo));
  };

  const show = () => {
    console.log(todoE);
  };

  return (
    <>
      <button onClick={dispathAction}>Dispatch</button>
      <button onClick={show}>Show</button>
    </>
  );
}

export default App;
