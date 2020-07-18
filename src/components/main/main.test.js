import React from 'react';
import Main from './Main.jsx';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import mockOffersList from "../../mocks/offers.js";

const mockStore = configureStore([]);

it(`renders correctly`, () => {
  const store = mockStore({
    city: `Moskow`,
    offers: mockOffersList,
    allOffers: mockOffersList,
    handleClick: jest.fn(),
  });
  const tree = renderer.create(
      <Provider store={store}>
        <Main/>
      </Provider>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
