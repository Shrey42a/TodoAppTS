import { FC, InputHTMLAttributes } from "react";

type InputProps = {
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({...rest}) => {
  return(
      <div>
          <input {...rest} className="w-4/5 lg:w-1/4 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:outline-none p-2 rounded-md shadow-sm shadow-neutral-600 outline-0 sm:text-sm" placeholder="Create a new Todo" />
        </div>
  );
} 

export default Input;