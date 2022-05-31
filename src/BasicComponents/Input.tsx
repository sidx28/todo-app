import { FC, InputHTMLAttributes, memo } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ ...props }) => {
  return (
    <>
      <input
        {...props}
        className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
      />
    </>
  );
};

Input.defaultProps = {};

export default memo(Input);
