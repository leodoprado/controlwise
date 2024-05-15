import React from 'react';
import { ButtonComponent } from './style';
import { IconType } from 'react-icons'; // Importe o tipo de ícone

type ButtonAccessDefaultProps = {
  typeButton?: "button" | "submit" | "reset" | undefined;
  titleButton: string;
  disabled?: any;
  icon?: IconType; 
};

const ButtonAccessDefault: React.FC<ButtonAccessDefaultProps> = ({ typeButton, titleButton, icon: Icon, disabled }) => {
  return (
    <ButtonComponent type={typeButton}>
      {Icon && <Icon className="button-icon" />}
      {titleButton}
      {disabled}
    </ButtonComponent>
  );
};

export default ButtonAccessDefault;
