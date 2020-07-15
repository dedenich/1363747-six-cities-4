import React from 'react';
import renderer from 'react-test-renderer';
import PropertyScreen from './property-screen.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const mockProperties = {
  photos: [
    `path1`,
    `path2`,
    `path3`,
    `path4`,
  ],
  heading: `I was certainly not anticipating creating an entire identity for my child.`,
  describtion: `just looking for a way to up the ante and get everyone excited and involved. And I have a flair for theatrics and love to throw parties – we had a party for the goldfish once. We have`,
  premium: true,
  type: `Apartment`,
  rating: 2.1,
  bedroomsNumber: 1,
  maxGuests: 2,
  price: 100,
  list: [
    `item1`,
    `item2`,
    `item3`,
    `item4`,
    `item5`,
  ],
  host: {
    avatar: `pathavat`,
    name: `Victor`,
    superStatus: true,
  },
};

it(`renders correctly`, () => {
  const store = mockStore({
    properties: mockProperties,
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <PropertyScreen/>
      </Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
