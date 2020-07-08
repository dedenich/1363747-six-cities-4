import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

const mockPlacesList = [
  [12, 12],
  [11, 11],
  [13, 12],
];

it(`renders correctly`, () => {
  const tree = renderer
  .create(<Map
    places={mockPlacesList}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
