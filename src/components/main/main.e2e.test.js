import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`should detect when header is pressed`, () => {
  const onHeaderClick = jest.fn();
  const main = shallow(
      <Main
        offersCount={123}
        captions={[
          `Description 1`,
          `Description 2`,
          `Description 3`,
          `Description 4`]}
        handleClick={onHeaderClick}
      />
  );
  const header = main.find(`b.places__found`);
  header.props().onClick();
  expect(onHeaderClick.mock.calls.length).toBe(1);
});
