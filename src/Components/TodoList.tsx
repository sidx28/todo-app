import { FC, memo } from "react";
import { Todo } from "../models/todo";
import TodoTile from "./TodoTile";

type TodoListProps = { todos: Todo[] };

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      <ul>
        {todos.map((e) => (
          <TodoTile todo={e} key={e.id}></TodoTile>
        ))}
      </ul>
    </>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);
