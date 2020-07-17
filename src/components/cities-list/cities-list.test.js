import React from 'react';
import CitiesList from './cities-list.jsx';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const mockOffersList = [
  {
    caption: `Capion 1`,
    src: `https://path`,
    price: 100,
    coordinates: [12, 12],
    city: `1`
  },
  {
    caption: `Capion 2`,
    src: `https://path`,
    price: 160,
    coordinates: [12, 12],
    city: `1`
  },
  {
    caption: `Capion 3`,
    src: `https://path`,
    price: 90,
    coordinates: [12, 12],
    city: `1`
  },
];

it(`renders correctly`, () => {
  const store = mockStore({
    allOffers: mockOffersList,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <CitiesList/>
      </Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
