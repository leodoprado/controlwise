import React, { InputHTMLAttributes } from "react";
import { InputComponent } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
    return(
        <>
            <InputComponent { ...rest } />
        </> 
    )
}

export default Input;