import { ChangeEvent, FC, memo, useState } from "react";
import Button from "../BasicComponents/Button";
import { GoPlus } from "react-icons/go";

type AddTodoFormProps = {};

const AddTodoForm: FC<AddTodoFormProps> = (props) => {
  const [showTodo, updateShowTodo] = useState(false);

  const [inputValue, updateInputValue] = useState("");

  const handleShowTodoForm = () => {
    updateShowTodo(true);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateInputValue(e.target.value);
    };
  };
  return (
    <>
      {!showTodo && (
        <Button
          theme="highlight"
          icon={<GoPlus />}
          onClick={handleShowTodoForm}
        >
          Add A Todo
        </Button>
      )}
      {showTodo && (
        <div className="flex flex-col items-start p-8 space-y-4 ">
          <h4>Create a Todo</h4>
          <input
            value={inputValue}
            onChange={handleInputChange}
            className="rounded-md border bg-gray-200"
          />
          <div className="flex flex-row space-x-2">
            <Button>Save</Button>
            <Button theme="secondary">Cancel</Button>
          </div>
        </div>
      )}
    </>
  );
};

AddTodoForm.defaultProps = {};

export default memo(AddTodoForm);
