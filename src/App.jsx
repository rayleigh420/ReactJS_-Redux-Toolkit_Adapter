import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addTodo,
  // selectAll,
  testSelectAll1,
  testSelectAll2,
  testSelector,
} from "./features/todoSlice";

function App() {
  const todo = {
    id: "1",
    content: "Hello my name is...",
  };

  const dispatch = useDispatch();
  const select1 = useSelector(testSelectAll1);
  // const select2 = useSelector(testSelectAll2(state.todo));
  const test = useSelector((state) => testSelector(state));

  const dispathAction = () => {
    dispatch(addTodo(todo));
  };

  console.log("testSlector1: ", select1);
  const show = () => {
    // console.log("testSlector2: ", select2);
  };

  return (
    <>
      <button onClick={dispathAction}>Add</button>
      <button onClick={show}>Show</button>
    </>
  );
}

export default App;
