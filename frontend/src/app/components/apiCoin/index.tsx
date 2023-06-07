import React, { useEffect, useState } from "react";
import axios from "axios";

interface Currency {
  code: string;
  name: string;
  high: string;
  low: string;
  bid: string;
  ask: string;
  timestamp: string;
}

const CurrencyRates: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await axios.get(
          "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"
        );
        const data = response.data;
        const currencyRates: Currency[] = Object.values(data);

        setCurrencies(currencyRates);
        setLoading(false);
      } catch (error) {
        setError("Erro ao obter as taxas de câmbio");
        setLoading(false);
      }
    };

    fetchCurrencyRates();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Taxas de Câmbio</h2>
      <table>
        <thead>
          <tr>
            <th>Moeda</th>
            <th>Valor de Compra</th>
            <th>Valor de Venda</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <tr key={currency.code}>
              <td>{currency.name}</td>
              <td>{currency.bid}</td>
              <td>{currency.ask}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyRates;
