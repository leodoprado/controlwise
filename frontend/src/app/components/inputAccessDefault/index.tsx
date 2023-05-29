import React from 'react';
import { InputComponent } from './style';

type InputAccessDefaultProps = {
    textLabel : string;
    placeholderInput : string;
    typeInput : string;
    classNameInput : string;
    helperText : string | undefined; 
};

const InputAccessDefault: React.FC<InputAccessDefaultProps> = ({ helperText, textLabel, placeholderInput, typeInput, classNameInput }) => {
  return (
    <>
      <label>{textLabel}</label>
      <InputComponent type={typeInput} placeholder={placeholderInput} className={classNameInput}></InputComponent>
      {<span>{helperText}</span>}
    </>    
  );
};

export default InputAccessDefault;