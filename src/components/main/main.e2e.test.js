import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './Main.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import mockOffersList from "../../mocks/offers.js";

import NameSpace from '../../reducers/namespace.js';
import {AuthorizationStatus} from "../../const.js";
import {Router} from 'react-router-dom';
import history from "../../history.js";

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

it(`should detect when header is pressed`, () => {
  const onHeaderClick = jest.fn();
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    [NameSpace.OFFERS]: {
      offers: mockOffersList,
      cities: new Set([`1`, `2`]),
      currentCity: `Brussels`,
    },
  });
  const main = mount(
      <Provider store={store}>
        <Router history={history}>
          <Main
            handleClick={onHeaderClick}
          />
        </Router>

      </Provider>
  );
  const header = main.find(`.places__found`);
  header.props().onClick();
  expect(onHeaderClick.mock.calls.length).toBe(1);
});
