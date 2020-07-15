import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Map from './map.jsx';

const mockStore = configureStore([]);

const mockPlacesList = [
  [12, 12],
  [11, 11],
  [13, 12],
];

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
    places: mockPlacesList,
    offers: mockOffersList,
  });
  const tree = renderer
  .create(
      <Provider store={store}>
        <Map/>
      </Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
