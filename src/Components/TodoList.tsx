import { FC, memo } from "react";
import { connect, useDispatch } from "react-redux";
import { TODO_STATUS_CHANGE } from "../action/todos";
import { Todo } from "../models/todo";
import {
  completeTodoSelector,
  incompleteTodoSelector,
} from "../selectors/todos";
import { State } from "../store";
import TodoTile from "./TodoTile";

type TodoListProps = { todos: Todo[] };

const TodoList: FC<TodoListProps> = ({ todos }) => {
  const dispatch = useDispatch();
  const handleStatusChange = (id: number, done: boolean) => {
    dispatch({ type: TODO_STATUS_CHANGE, payload: { id, done } });
  };
  return (
    <>
      <ul>
        {todos.map((e) => (
          <TodoTile
            onStatusChange={handleStatusChange}
            todo={e}
            key={e.id}
          ></TodoTile>
        ))}
      </ul>
    </>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);

const incompleteMapper = (s: State) => ({ todos: incompleteTodoSelector(s) });

const completeMapper = (s: State) => {
  return { todos: completeTodoSelector(s) };
};

export const IncompleteTodoList = connect(incompleteMapper)(TodoList);
export const CompleteTodoList = connect(completeMapper)(TodoList);
