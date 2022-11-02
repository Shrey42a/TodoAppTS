import {FC, InputHTMLAttributes } from "react";

type CheckboxProps = {
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: FC<CheckboxProps> =  ({...rest}) => {
  return(
        <input type="checkbox" {...rest} className="accent-fuchsia-600 w-4 mt-1 h-4 checked:border-yellow-600 border-gray-300 rounded shadow-sm shadow-zinc-700 focus:ring-white" />  
  );
}

export default Checkbox;
