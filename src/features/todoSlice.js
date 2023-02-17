import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const todoAdapter = createEntityAdapter();

const initialState = todoAdapter.getInitialState();

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      todoAdapter.addOne(state, action.payload);
    },
  },
});

export const { selectAll } = todoAdapter.getSelectors((state) => state.todo); // vi dat ten la todo trong store nen phai goi la todo

export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
