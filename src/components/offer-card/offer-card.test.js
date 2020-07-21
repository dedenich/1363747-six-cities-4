import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

import mockStoreConf from "../../mocks/mock-store-conf.js";

const mockStore = configureStore([]);

const mockOffer = {
  caption: `Down by the Way, in Minsk`,
  src: `https://static01.nyt.com/images/2019/03/21/realestate/21Hunt-Kensington2/merlin_151969089_f58f4e1a-e362-4fe9-86da-d7305b353b49-jumbo.jpg`,
  price: 100
};

it(`renders correctly`, () => {
  const store = mockStore(mockStoreConf);
  const tree = renderer
  .create(
      <Provider store={store}>
        <OfferCard
          offer={mockOffer}
          onCardHover={jest.fn()}
          handleActiveChange={jest.fn()}
        />
      </Provider>
  );
  expect(tree).toMatchSnapshot();
});
