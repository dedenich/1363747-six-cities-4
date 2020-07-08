import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './Main';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockOffersList = [
  {
    caption: `Capion 1`,
    src: `https://path`,
    price: 100,
    coordinates: [12, 12],
  },
  {
    caption: `Capion 2`,
    src: `https://path`,
    price: 160,
    coordinates: [12, 12],
  },
  {
    caption: `Capion 3`,
    src: `https://path`,
    price: 90,
    coordinates: [12, 12],
  },
];

it(`should detect when header is pressed`, () => {
  const onHeaderClick = jest.fn();
  const main = shallow(
      <Main
        offersCount={123}
        offers={mockOffersList}
        handleClick={onHeaderClick}
      />
  );
  const header = main.find(`b.places__found`);
  header.props().onClick();
  expect(onHeaderClick.mock.calls.length).toBe(1);
});
