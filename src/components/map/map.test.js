import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Map from './map.jsx';
import mockOffersList from "../../mocks/offers.js";

const mockStore = configureStore([]);

const mockPlacesList = [
  [12, 12],
  [11, 11],
  [13, 12],
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
