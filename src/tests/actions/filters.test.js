import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate} from '../../actions/filters';
import moment from 'moment';

test('Should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });  
});

test('Should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('Should set sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('Should set sort by date action object', () => {
  // const action = sortByDate();
  // expect(action).toEqual({
  //   type: 'SORT_BY_DATE'
  // });
  expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

test('Should set text filter action object', () => {
  const text = 'something in';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('Should set text filter action object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});