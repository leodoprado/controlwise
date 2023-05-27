import React from 'react';
import { ButtonComponent } from './style';

type ButtonAccessDefaultProps = {
  typeButton?: "button" | "submit" | "reset" | undefined;
  titleButton: string;
};

const ButtonAccessDefault: React.FC<ButtonAccessDefaultProps> = ({ typeButton, titleButton }) => {
  return (
    <ButtonComponent type={typeButton}>{titleButton}</ButtonComponent>
  );
};

export default ButtonAccessDefault;