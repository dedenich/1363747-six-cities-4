import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = renderer
  .create(<App
    offersCount={123}
    captions={[
      `Description 1`,
      `Description 2`,
      `Description 3`,
      `Description 4`]}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
