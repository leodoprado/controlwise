import React from 'react';
import { InputContainer, StyledInput, IconWrapper, Label } from './style';
import { IconType } from 'react-icons';

type InputAccessDefaultProps = {
  textLabel: string;
  placeholderInput: string;
  typeInput: string;
  classNameInput?: string;
  icon?: IconType;
};

const InputAccessDefault: React.FC<InputAccessDefaultProps> = ({ textLabel, placeholderInput, typeInput, classNameInput, icon: Icon }) => {
  return (
    <div>
      <Label>{textLabel}</Label>
      <InputContainer>
        {Icon && (
          <IconWrapper>
            <Icon />
          </IconWrapper>
        )}
        <StyledInput type={typeInput} placeholder={placeholderInput} className={classNameInput} />
      </InputContainer>
    </div>
  );
};

export default InputAccessDefault;
