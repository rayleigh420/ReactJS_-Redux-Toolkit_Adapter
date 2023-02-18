import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const todoAdapter = createEntityAdapter();

const initialState = todoAdapter.getInitialState();

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      todoAdapter.addOne(state, action.payload);
      // console.log(
      //   "hello: ",
      //   todoAdapter.getSelectors((state) => state.todo).selectAll(state)
      // );
    },
  },
});

export const { selectAll: testSelectAll1 } = todoAdapter.getSelectors(
  (state) => state.todo
);
export const { selectAll: testSelectAll2 } = todoAdapter.getSelectors();

// Nếu lấy selector từ getSelector() mà không truyền ham số thì ta chỉ có thể gọi nó trong slice và phải truyền state.todo hoặc todo vào mới có thể chạy
// Nếu lấy selector từ getSelector((state) => state.todo) truyền tham số thì ta chỉ có thể gọi nó ở component 

// export const { selectAll } = todoAdapter.getSelectors((state) => state.todo);
// console.log(todoAdapter.getSelectors().selectAll(state)); // vi dat ten la todo trong store nen phai goi la todo
export const testSelector = createSelector([(state) => state, (state) => state.todo], (state, todo) => {
  console.log("RTK:::testSelectAll1: ", testSelectAll1(state));
  console.log("RTK:::testSelectAll2: ", testSelectAll2(todo));
  
  console.log(
    "test1: ",
    todoAdapter.getSelectors((state) => state.todo).selectAll(state)
  );
  console.log("test2: ", todoAdapter.getSelectors().selectAll(todo));
});

export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
