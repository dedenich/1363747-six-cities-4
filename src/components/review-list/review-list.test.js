import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewList} from './review-list.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

import mockStoreConf from "../../mocks/mock-store-conf.js";

const mockStore = configureStore([]);

const mockReviews = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`
    }
  },
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`
    }
  }
];

it(`renders correctly`, () => {
  const mockFn = jest.fn();
  const store = mockStore(mockStoreConf);
  const tree = renderer
  .create(
      <Provider store={store}>
        <ReviewList
          reviews={mockReviews}
          onLoadReviews={mockFn}
        />
      </Provider>
  );
  expect(tree).toMatchSnapshot();
});
