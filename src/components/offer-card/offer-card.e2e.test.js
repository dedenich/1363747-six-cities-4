import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {OfferCard} from './offer-card.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";

import mockStoreConf from "../../mocks/mock-store-conf.js";

const mockStore = configureStore([]);
Enzyme.configure({
  adapter: new Adapter(),
});

const mockOffer = {
  caption: `Down by the Way, in Minsk`,
  src: `https://static01.nyt.com/images/2019/03/21/realestate/21Hunt-Kensington2/merlin_151969089_f58f4e1a-e362-4fe9-86da-d7305b353b49-jumbo.jpg`,
  price: 100,
  id: 12,
};

it(`should answer to a click`, () => {
  const handleHeadingClick = jest.fn();
  const store = mockStore({mockStoreConf});
  const card = shallow(
      <Provider store={store}>
        <Router history={history}>
          <OfferCard
            offer={mockOffer}
            onCardHover={jest.fn()}
            handleActiveChange={jest.fn()}
            handleHeadingClick={handleHeadingClick}
            handleOfferChange={jest.fn()}
          />
        </Router>
      </Provider>
  );
  const heading = card.find(`article`);
  if (!heading) {
    heading.simulate(`click`);
    expect(handleHeadingClick).toHaveBeenCalledTimes(1);
  }
});

