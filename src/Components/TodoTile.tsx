import { FC, memo } from "react";
import Input from "../BasicComponents/Input";
import { Todo } from "../models/todo";

type TodoTileProps = { todo: Todo };

const TodoTile: FC<TodoTileProps> = ({ todo }) => {
  const { id, title, done } = todo;
  return (
    <>
      <li className="list-none">
        <div className="flex flex-row items-center p-1">
          <Input type="checkbox" checked={done} />
          <p className="ml-3 font-semibold ">{title}</p>
        </div>
      </li>
    </>
  );
};

TodoTile.defaultProps = {};

export default memo(TodoTile);
