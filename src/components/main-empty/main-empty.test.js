import React from 'react';
import renderer from 'react-test-renderer';
import MainEmpty from './main-empty.jsx';

it(`renders empty main page correctly`, () => {
  const tree = renderer.create(
      <MainEmpty city={`Pskov`}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
