import React from 'react';
import renderer from 'react-test-renderer';
import {Sorting} from './sorting.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

import mockStoreConf from "../../mocks/mock-store-conf.js";

const mockStore = configureStore([]);

it(`renders correctly`, () => {
  const store = mockStore(mockStoreConf);
  const tree = renderer
  .create(
      <Provider store={store}>
        <Sorting
          isOpened={true}
          onOpenClick={jest.fn()}
          onSelectClick={jest.fn()}
          onChangeSortingType={jest.fn()}
          sortingType={`Popular`}
        />
      </Provider>
  );
  expect(tree).toMatchSnapshot();
});
