import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  p {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const ContainerContent = styled.div`
    display: flex;
    margin-bottom: 30px;

    input {
        width: 27rem;
        height: 0.5rem;
        padding: 1.1em 1.2em;
        font-size: 1em;
        font-weight: 500;
        border: 1px solid #666666;
        color: white;
        background-color: transparent;
    }

    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    input:hover, button:hover{
        border: 1px solid #7c7c7c;
        color: #fff;
    }

    button {
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        background-color: #1a1a1a;
        color: #fff;
        border: 1px solid #666666;
        cursor: pointer;
        transition: border-color 0.25s;    
    }
    
    button:focus, button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }  
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const QuoteText = styled.p`
  font-size: 26px;
  font-weight: 800;
`;