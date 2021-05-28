import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
  const text = 'test';
  const state = filtersReducer(undefined, { text, type: 'SET_TEXT_FILTER'});
  expect(state.text).toBe(text);
});

//using action object inline
test('Should set startDate filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0)});
  expect(state.startDate).toEqual(moment(0));
});

//using action object seperate
test('Should set endDate filter', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});