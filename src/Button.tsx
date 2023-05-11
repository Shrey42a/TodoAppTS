import {ButtonHTMLAttributes, FC} from "react";

type ButtonProps = {
    theme: "primary" | "secondary" | "highlight";
    
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({theme, ...rest}) => {
  let themeClasses = 'text-white bg-yellow-500 border-transparent hover:bg-yellow-600';
  let radiusClass = 'rounded-full shadow-sm';

  if(theme === 'secondary') {
    themeClasses = 'text-gray-900 bg-white rounded-md border-gray-200 hover:bg-gray-200';
  }

  if(theme === 'highlight') {
    radiusClass = 'rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed';
  }
  
  return(
     <button {...rest} className={"inline-flex justify-center px-4 py-2 text-sm font-medium mt-4 text-white bg-yellow-500 border border-transparent rounded-full shadow-zinc-600 shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 " + themeClasses + '  ' + radiusClass}>
     </button>
  );
}

export default Button;
