import React from 'react';
import App from './App.jsx';
import renderer from 'react-test-renderer';

const mockOffersList = [
  {
    caption: `Capion 1`,
    src: `https://path`,
    price: 100,
    coordinates: [12, 12],
  },
  {
    caption: `Capion 2`,
    src: `https://path`,
    price: 160,
    coordinates: [12, 12],
  },
  {
    caption: `Capion 3`,
    src: `https://path`,
    price: 90,
    coordinates: [12, 12],
  },
];

it(`renders correctly`, () => {
  const tree = renderer
  .create(<App
    offersCount={123}
    offers={mockOffersList}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
