import { useEffect, useState } from 'react';
import CurerencyRow from '../components/CurerencyRow';

import { Container, Equals } from './Root.styled';

export default function Root() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  const date = new Date().toLocaleDateString();

  let toAmount, fromAmount;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = fromAmount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=${
        import.meta.env.VITE_FREECURRENCY_APY_KEY
      }`
    )
      .then((res) => res.json())
      .then((currencies) => {
        const firstCurrency = Object.keys(currencies.data)[0];

        setCurrencyOptions(Object.keys(currencies.data));
        setFromCurrency('USD');
        setToCurrency(firstCurrency);
        setExchangeRate(currencies.data[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency !== null || toCurrency !== null) {
      fetch(
        `https://api.freecurrencyapi.com/v1/latest?apikey=${
          import.meta.env.VITE_FREECURRENCY_APY_KEY
        }&currencies=${toCurrency}&base_currency=${fromCurrency}`
      )
        .then((res) => res.json())
        .then((currencies) => {
          setExchangeRate(currencies.data[toCurrency]);
        });
    }
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  return (
    <Container>
      <h1>Конвертер валют</h1>
      <p>
        Введіть суму та оберіть валюту, з якої та в яку бажаєте конвертувати
      </p>
      <div>
        <CurerencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <Equals>=</Equals>
        <CurerencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleToAmountChange}
        />
      </div>
      <p>
        Зверніть увагу, що вказані курси є орієнтовними і дійсні станом на{' '}
        {date}
      </p>
    </Container>
  );
}
