import React, { ChangeEvent } from 'react';
import { InputComponent } from './styles';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: string;
}

const Input: React.FC<InputProps> = ({ label, value, type, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <InputComponent type={type} value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
