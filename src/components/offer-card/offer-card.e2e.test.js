import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockOffer = {
  caption: `Down by the Way, in Minsk`,
  src: `https://static01.nyt.com/images/2019/03/21/realestate/21Hunt-Kensington2/merlin_151969089_f58f4e1a-e362-4fe9-86da-d7305b353b49-jumbo.jpg`,
  price: 100
};

it(`should pass correct information to callback`, () => {
  const handleCardHover = jest.fn();
  const handleActiveChange = jest.fn();
  const mockedEvent = {target: {}};
  const card = shallow(
      <OfferCard
        offer={mockOffer}
        onCardHover={handleCardHover}
        handleActiveChange={handleActiveChange}
      />
  );
  card.simulate(`mouseEnter`, mockedEvent);
  expect(handleActiveChange.mock.calls.length).toBe(1);
  expect(handleActiveChange.mock.calls[0][0]).toBe(mockedEvent);
});

it(`should answer to a click`, () => {
  const handleHeadingClick = jest.fn();
  const handleActiveChange = jest.fn();
  const handleCardHover = jest.fn();
  const card = shallow(
      <OfferCard
        offer={mockOffer}
        onCardHover={handleCardHover}
        onHeadingClick={handleHeadingClick}
        handleActiveChange={handleActiveChange}
      />
  );
  const heading = card.find(`h2`);
  heading.simulate(`click`);
  expect(handleHeadingClick).toHaveBeenCalledTimes(1);
});

