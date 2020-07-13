import React from 'react';
import Main from './Main.jsx';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const mockOffersList = [
  {
    caption: `Capion 1`,
    src: `https://path`,
    price: 100,
    coordinates: [12, 12],
    city: `1`
  },
  {
    caption: `Capion 2`,
    src: `https://path`,
    price: 160,
    coordinates: [12, 12],
    city: `1`
  },
  {
    caption: `Capion 3`,
    src: `https://path`,
    price: 90,
    coordinates: [12, 12],
    city: `1`
  },
];

it(`renders correctly`, () => {
  const store = mockStore({
    city: `Moskow`,
  });
  const tree = renderer.create(
      <Provider store={store}>
        <Main
          city={`Moskow`}
          offersCount={123}
          offers={mockOffersList}
          onHeadingClick={jest.fn()}
          onCityClick={jest.fn()}
          cities={[`1`, `2`]}
        />
      </Provider>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
