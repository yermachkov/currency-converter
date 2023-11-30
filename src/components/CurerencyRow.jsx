import { Input, Select } from './CurencyRow.styled';

const CurrencyRow = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) => {
  return (
    <>
      <Input
        type="number"
        id="amount"
        value={amount}
        onChange={onChangeAmount}
      />
      <Select
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <option
            value={option}
            key={option}
          >
            {option}
          </option>
        ))}
      </Select>
    </>
  );
};

export default CurrencyRow;
