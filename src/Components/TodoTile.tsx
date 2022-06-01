import { FC, memo, useCallback } from "react";
import Input from "../BasicComponents/Input";
import { Todo } from "../models/todo";

type TodoTileProps = {
  todo: Todo;
  onStatusChange: (id: number, done: boolean) => void;
};

const TodoTile: FC<TodoTileProps> = ({ todo, onStatusChange }) => {
  const { id, title, done } = todo;

  const handleChange = useCallback(() => {
    onStatusChange(id, !done);
  }, [id, done]);
  return (
    <>
      <li className="list-none">
        <div className="flex flex-row items-center p-1">
          <Input type="checkbox" checked={done} onChange={handleChange} />
          <p className="ml-3 font-semibold ">{title}</p>
        </div>
      </li>
    </>
  );
};

TodoTile.defaultProps = {};

export default memo(TodoTile);
