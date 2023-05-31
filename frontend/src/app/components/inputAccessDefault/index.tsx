import React from 'react';
import { InputComponent } from './style';

type InputAccessDefaultProps = {
    textLabel : string;
    placeholderInput : string;
    typeInput : string;
    classNameInput : string;
};

const InputAccessDefault: React.FC<InputAccessDefaultProps> = ({ textLabel, placeholderInput, typeInput, classNameInput }) => {
  return (
    <>
      <label>{textLabel}</label>
      <InputComponent type={typeInput} placeholder={placeholderInput} className={classNameInput}></InputComponent>
    </>    
  );
};

export default InputAccessDefault;