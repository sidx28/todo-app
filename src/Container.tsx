import { FC, memo } from "react";
import Button from "./BasicComponents/Button";
import H1 from "./BasicComponents/H1";
import H3 from "./BasicComponents/H3";
import TodoList from "./Components/TodoList";

type ContainerProps = {};

const Container: FC<ContainerProps> = () => {
  return (
    <>
      {" "}
      <div className="p-5 space-y-4">
        <H1> Things to get done</H1>
        <H3>Things to do</H3>
        {<span className="text-gray-500 ">No todo here!</span>}

        <TodoList todos={[]}></TodoList>
        <div>{/* <AddTodoForm saveTodo={saveTodo}></AddTodoForm> */}</div>
        <div className="space-x-10 flex flex-row">
          <H3 className="text-2xl font-semibold">Things done</H3>
          <Button theme="secondary">Clear All</Button>
        </div>
        {<span className="text-gray-500">No todo here!</span>}
        <TodoList todos={[]}></TodoList>
      </div>
    </>
  );
};

Container.defaultProps = {};

export default memo(Container);
