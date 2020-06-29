import React from 'react';
import renderer from 'react-test-renderer';
import PropertyScreen from './property-screen.jsx';

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
  const {photos, heading, describtion, premium, type, rating, bedroomsNumber, maxGuests, price, list, host} = mockProperties;
  const tree = renderer
  .create(
      <PropertyScreen
        photos={photos}
        heading={heading}
        describtion={describtion}
        premium={premium}
        type={type}
        rating={rating}
        bedroomsNumber={bedroomsNumber}
        maxGuests={maxGuests}
        price={price}
        list={list}
        host={host}
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
