import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: #F1F3F6;
  border: none;
  border-bottom: solid 2px #A6A6A6;
  padding: 8px;
  padding-right: 40px; /* espaço para o ícone */
  outline: none;

  &::placeholder {
    color: #A6A6A6;
  }

  &:focus {
    transition: 0.6s;
    border-bottom: solid 2px #4AC6C0;

    & + div {
      color: #4AC6C0;
    }
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  color: #A6A6A6;
  transition: color 0.6s;
`;
