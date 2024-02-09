import { useEffect, useState } from 'react';
import CurerencyRow from '../../components/CurrencyRow/CurerencyRow';

import styled from './Converter.module.scss';

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
    <div className={`container ${styled.box}`}>
      <h1>Currency converter</h1>
      <p>Chooose the currency or amount to convert</p>
      <div>
        <CurerencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <p>=</p>
        <CurerencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleToAmountChange}
        />
      </div>
      <p>
        Be aware that the currency exchange rates are indicative and valid only
        on {date}
      </p>
    </div>
  );
}
