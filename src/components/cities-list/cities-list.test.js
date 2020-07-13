import React from 'react';
import CitieList from './cities-list.jsx';
import renderer from 'react-test-renderer';

const mockCities = [
  `Дмитров`,
  `Долгопрудный`,
  `Домодедово`,
  `Донской`,
  `Дубна`,
  `Евпатория`,
];

it(`renders correctly`, () => {
  const tree = renderer.create(<CitieList
    cities={mockCities}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
