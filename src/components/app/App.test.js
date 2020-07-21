import React from 'react';
import {App} from './App.jsx';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import properties from '../../mocks/properties.js';
import mockOffersList from "../../mocks/offers.js";

const mockStore = configureStore([]);

const mockFn = jest.fn();

it(`renders correctly`, () => {
  const store = mockStore({
    city: `Moskow`,
    currentOffer: `1`,
    offers: mockOffersList,
    allOffers: mockOffersList,
    properties,
  });
  const tree = renderer
  .create(
      <Provider store={store}>
        <App
          onLoadOffers={mockFn}
        />
      </Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
