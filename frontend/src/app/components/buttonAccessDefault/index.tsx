import React from 'react';
import { ButtonComponent } from './style';
import { IconType } from 'react-icons'; // Importe o tipo de ícone

type ButtonAccessDefaultProps = {
  typeButton?: "button" | "submit" | "reset" | undefined;
  titleButton: string;
  icon?: IconType; 
};

const ButtonAccessDefault: React.FC<ButtonAccessDefaultProps> = ({ typeButton, titleButton, icon: Icon }) => {
  return (
    <ButtonComponent type={typeButton}>
      {Icon && <Icon className="button-icon" />}
      {titleButton}
    </ButtonComponent>
  );
};

export default ButtonAccessDefault;
