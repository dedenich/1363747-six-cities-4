import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './Main.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`should detect when header is pressed`, () => {
  const onHeaderClick = jest.fn();
  const store = mockStore({
    city: `Moskow`,
    offers: mockOffersList,
    allOffers: mockOffersList,
    handleClick: onHeaderClick,
  });
  const main = mount(
      <Provider store={store}>
        <Main
          handleClick={onHeaderClick}
        />
      </Provider>
  );
  const header = main.find(`.places__found`);
  header.props().onClick();
  expect(onHeaderClick.mock.calls.length).toBe(1);
});
