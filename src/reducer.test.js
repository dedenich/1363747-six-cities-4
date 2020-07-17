import {reducer, ActionType, ActionCreator} from "./reducer.js";
import offers from './mocks/offers.js';
import properties from './mocks/properties.js';

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
