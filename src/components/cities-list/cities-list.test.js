import React from 'react';
import CitiesList from './cities-list.jsx';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

import mockStoreConf from '../../mocks/mock-store-conf.js';

const mockStore = configureStore([]);

it(`renders correctly`, () => {
  const store = mockStore(mockStoreConf);

  const tree = renderer.create(
      <Provider store={store}>
        <CitiesList/>
      </Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
