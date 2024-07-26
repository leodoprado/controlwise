import React from 'react';
import { IconType } from 'react-icons';
import {
  Container,
  Label,
  InputWrapper,
  StyledInput,
  IconWrapper
} from './style';

interface InputAccessProps {
  label?: string;
  icon: IconType;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  id?: string;
}

const InputAccess: React.FC<InputAccessProps> = ({
  label,
  icon: Icon,
  placeholder,
  value,
  onChange,
  type = 'text',
  name,
  id
}) => {
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputWrapper>
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          id={id}
        />
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </InputWrapper>
    </Container>
  );
};

export default InputAccess;
