import React from 'react';
import { InputComponent } from './style';
import { IconType } from 'react-icons/lib';

type InputAccessDefaultProps = {
    textLabel : string;
    placeholderInput : string;
    typeInput : string;
    classNameInput : string;
    icon?: IconType;
};

const InputAccessDefault: React.FC<InputAccessDefaultProps> = ({ textLabel, placeholderInput, typeInput, classNameInput, icon:Icon}) => {
  return (
    <>
      <label>{textLabel}</label>
      {Icon && <Icon style={{ marginRight: '10px' }} />}
      <InputComponent type={typeInput} placeholder={placeholderInput} className={classNameInput}></InputComponent>
    </>    
  );
};

export default InputAccessDefault;