import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';
import mockOffersList from "../../mocks/offers.js";

it(`renders correctly`, () => {
  const tree = renderer
  .create(
      <Map offers={mockOffersList}/>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
