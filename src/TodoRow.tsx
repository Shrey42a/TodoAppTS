import React, { FC } from "react";
import Checkbox from "./Checkbox";
import { GiSplitCross } from "react-icons/gi";
import 'animate.css';
import { todo } from "./models/todo";



type TodoRowProps = {
  onDelete: (todo: todo) => void;
  onStatusChange: (todo: todo) => void;
  done: boolean;
  todo: todo;
}
const TodoRow: FC<TodoRowProps> = ({ onDelete, onStatusChange, todo, done }) => {

  const onCheckboxChange = () => {
    onStatusChange(todo);
  }

  const onDelete2 = () => {
    onDelete(todo);
  }

  return (
    <div className="animate__slow animate__jackInTheBox animate__animated shadow-md shadow-neutral-800 space-x-2 m-2 flex justify-between p-3 px-4 max-w-5xl rounded-md bg20 bg-cover">
      <div className="flex justify-around">
        <Checkbox checked={done} onChange={onCheckboxChange} />
        <span className={"pl-2 hover:scale-125 ml-2 -mt-0.5 font-medium text-gray-700 " + (done && 'line-through')}>{todo.title}</span></div>
      <div className="mt-1 cursor-pointer hover:scale-150 -ml-4">
        <GiSplitCross onClick={onDelete2} /></div>
    </div>

  );
}
export default TodoRow;