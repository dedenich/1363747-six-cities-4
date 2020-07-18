import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offers-list.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

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
  const store = mockStore({
    offers: mockOffersList,
    allOffers: mockOffersList,
  });
  const tree = renderer
  .create(
      <Provider store={store}>
        <OffersList
          handleActiveChange={jest.fn()}
        />
      </Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
