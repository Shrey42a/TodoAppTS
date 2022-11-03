import React, {ChangeEvent, FC} from "react";
import Button from "./Button";
import Input from "./Input";
import "animate.css";

type FormProps  = {
  onCreate: (todoTitle: string) => void;
  onClose: () => void;
}

const Form: FC<FormProps> = ({onCreate, onClose}) => {

  const [inputValue, setInputValue] = React.useState('');

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const saveToDo = () => {
    onCreate(inputValue);
    
    setInputValue('');
  }
  
  return (
   
    <div className="animate__fast animate__jackInTheBox animate__animated bg20">
      <div className="px-2 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Create a todo</h3><form className="mt-5">
          <div>
            <Input value={inputValue} onChange={onInputChange}></Input></div>
            <div className="flex justify-start space-x-2 pt-5">
              <Button disabled={inputValue.trim().length == 0} onClick={saveToDo} theme="highlight">Save</Button>
              <Button onClick={onClose} theme="secondary">Cancel</Button></div></form></div>
      </div>
  );
}

export default Form;