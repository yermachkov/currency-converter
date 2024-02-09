import { useState } from 'react';
import styled from './DatePicker.module.scss';

const DatePicker = () => {
  const [dateToShow, setDateToShow] = useState([]);

  return (
    <div className={`container ${styled.section}`}>
      <h1>Date Picker</h1>
      <p>Please, type in the date __.__.20___</p>
      <input
        className={styled.input}
        autoComplete="__.__.20___"
      />
      <p>Here is your date in local format:</p>
      {dateToShow.length === 1 && <p>{dateToShow[0]}</p>}
      {dateToShow.length > 1 &&
        dateToShow.map((date) => <p key={date}>{date}</p>)}
    </div>
  );
};

export default DatePicker;
