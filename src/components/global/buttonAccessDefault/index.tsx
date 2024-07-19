import React from 'react';
import { ButtonComponent } from './style';
import { IconType } from 'react-icons'; // Importe o tipo de ícone

type ButtonAccessDefaultProps = {
  typeButton?: "button" | "submit" | "reset" | undefined;
  titleButton: string;
  onClick: () => void; // Defina onClick como uma função
  icon?: IconType; 
};

const ButtonAccessDefault: React.FC<ButtonAccessDefaultProps> = ({ typeButton, titleButton, icon: Icon, onClick }) => {
  return (
    <ButtonComponent type={typeButton} onClick={onClick}>
      {Icon && <Icon className="button-icon" />}
      {titleButton}
    </ButtonComponent>
  );
};

export default ButtonAccessDefault;
