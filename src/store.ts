import { createStore, Reducer } from "redux";
import { TODO_ADD, TODO_STATUS_CHANGE } from "./action/todos";
import { Todo } from "./models/todo";

export type State = { todos: Todo[] };
let count = 0;

const initialState: State = {
  todos: [],
};
const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;
      const newTodos = state.todos.map((t) => {
        if (t.id === id) {
          return { ...t, done };
        }
        return t;
      });
      return { ...state, todos: newTodos };
    }
    case TODO_ADD: {
      const todoText = action.payload;
      const todo: Todo = { id: count, title: todoText, done: false };
      count++;
      return { ...state, todos: [...state.todos, todo] };
    }

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
