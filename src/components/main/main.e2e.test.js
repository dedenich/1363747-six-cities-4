import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './Main.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import mockOffersList from "../../mocks/offers.js";

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

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
