import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Container, Button, Input, QuoteText, ContainerContent } from './style'
import { BiSearchAlt2 } from "react-icons/bi";

const CurrencyQuote: React.FC = () => {
  const [quote, setQuote] = useState<number | null>(null);
  const [currencyCode, setCurrencyCode] = useState<string>('');

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13 && buttonRef.current) {
      buttonRef.current.click();
    }
  };

  const fetchCurrencyQuote = async () => {
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${currencyCode}`
      );
      const quote = response.data.rates.BRL; // Altere 'BRL' para a moeda desejada
      setQuote(quote);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <ContainerContent>
        <Input
          placeholder='Informe a moeda que deseja buscar'
          type="text"
          value={currencyCode}
          onChange={(e) => setCurrencyCode(e.target.value.toUpperCase())}
          onKeyUp={handleKeyUp}
        />
        <Button ref={buttonRef} onClick={() => fetchCurrencyQuote()}><BiSearchAlt2/></Button>
      </ContainerContent>
      <p>Referência para a moeda R$:</p>
      {quote ? (
        <QuoteText>
          A cotação atual de {currencyCode} é: {quote}
        </QuoteText>
      ) : ( 
        <QuoteText>Informe a moeda...</QuoteText>
      )}
    </Container>
  );
};

export default CurrencyQuote;
