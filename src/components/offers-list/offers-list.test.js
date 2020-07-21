import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offers-list.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

import mockStoreConf from "../../mocks/mock-store-conf.js";

const mockStore = configureStore([]);

it(`renders correctly`, () => {
  const store = mockStore(mockStoreConf);
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
