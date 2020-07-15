import React from 'react';
import CitiesList from './cities-list.jsx';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const mockCities = [
  `Дмитров`,
  `Долгопрудный`,
  `Домодедово`,
  `Донской`,
  `Дубна`,
  `Евпатория`,
];

it(`renders correctly`, () => {
  const store = mockStore({
    onCityClick: jest.fn(),
  });

  const tree = renderer.create(
      <Provider store={store}>
        <CitiesList
          cities={mockCities}
        />
      </Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
