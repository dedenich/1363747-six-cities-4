import React from 'react';
import Main from './Main.jsx';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import mockOffersList from "../../mocks/offers.js";
import NameSpace from '../../reducers/namespace.js';
import {AuthorizationStatus} from "../../const.js";

const mockStore = configureStore([]);

it(`renders correctly`, () => {
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
  const tree = renderer.create(
      <Provider store={store}>
        <Main/>
      </Provider>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
