import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';
import mockOffersList from "../../mocks/offers.js";
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

import mockStoreConf from '../../mocks/mock-store-conf.js';

const mockStore = configureStore([]);


it(`renders correctly`, () => {
  const store = mockStore(mockStoreConf);
  const tree = renderer
  .create(
      <Provider store={store}>
        <Map offers={mockOffersList}/>
      </Provider>

  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
