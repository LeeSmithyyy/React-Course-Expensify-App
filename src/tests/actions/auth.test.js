import { login, logout } from '../../actions/auth';

test('Should generate Log in action object', () => {
  const uid = '101010';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('Should generate Log out action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});