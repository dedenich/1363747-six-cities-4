import React from 'react';
import Main from './main.jsx';
import renderer from 'react-test-renderer';

const mockOffersList = [
  {
    caption: `Capion 1`,
    src: `https://path`,
    price: 100
  },
  {
    caption: `Capion 2`,
    src: `https://path`,
    price: 160
  },
  {
    caption: `Capion 3`,
    src: `https://path`,
    price: 90
  },
];

it(`renders correctly`, () => {
  const tree = renderer
  .create(<Main
    offersCount={123}
    offers={mockOffersList}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
