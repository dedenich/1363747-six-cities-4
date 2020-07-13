import {reducer, ActionType, ActionCreator} from "./reducer.js";
import offers from './mocks/offers.js';
import properties from './mocks/properties.js';

const mockOffersList = [
  {
    caption: `Capion 1`,
    src: `https://path`,
    price: 100,
    coordinates: [12, 12],
    city: `Moskow`
  },
  {
    caption: `Capion 2`,
    src: `https://path`,
    price: 160,
    coordinates: [12, 12],
    city: `Bern`
  },
  {
    caption: `Capion 3`,
    src: `https://path`,
    price: 90,
    coordinates: [12, 12],
    city: `Berlin`
  },
];


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: null,
    currentOffer: null,
    allOffers: offers,
    offers,
    properties
  });
});

it(`Reducer should increment change city by a given value`, () => {
  expect(reducer({
    city: null,
    currentOffer: null,
    allOffers: offers,
    offers,
    properties
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Voronezh`,
  })).toEqual({
    city: `Voronezh`,
    currentOffer: null,
    allOffers: offers,
    offers,
    properties
  });
});

it(`Action creator returns correct action`, () => {
  expect(ActionCreator.changeCity(`Moskow`)).toEqual({
    type: ActionType.CHANGE_CITY,
    payload: `Moskow`,
  });
});

it(`Action creator returns correct action`, () => {
  expect(ActionCreator.getOffers(`Moskow`)).toEqual({
    type: ActionType.GET_OFFERS,
    payload: `Moskow`,
  });
});
