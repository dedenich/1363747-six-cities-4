import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreen from './login-screen.jsx';

it(`renders login page page correctly`, () => {
  const mockFn = jest.fn();
  const tree = renderer.create(
      <LoginScreen
        email={`email@example.com`}
        password={`1111`}
        isSending={true}
        onInputChange={mockFn}
        onSubmitForm={mockFn}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
