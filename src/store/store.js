import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // amount: _,
    // date: _,
  },
});

import { createAction, createReducer } from '@reduxjs/toolkit';

const increment = createAction('counter/increment');
const incrementByAmount = createAction('counter/incrementByAmount');

const initialState = { value: 0 };

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    });
});
