import React from 'react';
import Main from './main';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = renderer
  .create(<Main
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
