import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const todoAdapter = createEntityAdapter();

const initialState = todoAdapter.getInitialState();

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      todoAdapter.addOne(state, action.payload);
      console.log(state.todoSlice);
    },
  },
});

export const { selectAll: selectAllTodos } = todoAdapter.getSelectors(
  (state) => state.todo
);

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;