import {reducer, ActionType, ActionCreator} from "./offers.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: `Amsterdam`,
    currentOffer: null,
    offers: [],
    properties: [],
    sortingType: `Popular`,
  });
});

it(`Reducer should increment change city by a given value`, () => {
  expect(reducer({
    city: null,
    currentOffer: null,
    offers: [],
    properties: [],
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Voronezh`,
  })).toEqual({
    city: `Voronezh`,
    currentOffer: null,
    offers: [],
    properties: [],
  });
});

it(`Action creator returns correct action`, () => {
  expect(ActionCreator.changeCity(`Moskow`)).toEqual({
    type: ActionType.CHANGE_CITY,
    payload: `Moskow`,
  });
});

it(`Action creator returns correct action`, () => {
  expect(ActionCreator.getOffersIn(`Moskow`)).toEqual({
    type: ActionType.GET_OFFERS_IN,
    payload: `Moskow`,
  });
});
