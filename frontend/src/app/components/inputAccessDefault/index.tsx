import React from 'react';
import { InputComponent } from './style';

type InputAccessDefaultProps = {
    placeholderInput : string;
    typeInput : string;
    classNameInput : string; 
};

const InputAccessDefault: React.FC<InputAccessDefaultProps> = ({ placeholderInput, typeInput, classNameInput }) => {
  return (
    <InputComponent type={typeInput} placeholder={placeholderInput} className={classNameInput}></InputComponent>
  );
};

export default InputAccessDefault;