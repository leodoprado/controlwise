import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: #F1F3F6;
  border: none;
  border-bottom: solid 2px #A6A6A6;
  padding: 8px;
  padding-right: 30px; /* Adicionar espaço para o ícone */
  outline: none;
  margin-bottom: 16px;
  margin-top: 5px;

  ::placeholder {
    color: #A6A6A6;
  }

  :focus {
    transition: 0.6s;
    border-bottom: solid 2px #4AC6C0;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  pointer-events: none; /* Evita que o ícone interfira na interação com o input */
  color: #A6A6A6;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
`;
