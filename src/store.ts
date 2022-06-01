import { createStore, Reducer } from "redux";
import { TODO_STATUS_CHANGE } from "./action/todos";
import { Todo } from "./models/todo";

export type State = { todos: Todo[] };

const initialState: State = {
  todos: [
    { id: 1, title: "dfjsdgs", done: true },
    { id: 2, title: "false", done: false },
    { id: 3, title: "dfjsdgs", done: false },
  ],
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
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
