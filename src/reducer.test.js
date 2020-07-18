import {reducer, ActionType, ActionCreator, AuthorizationStatus} from "./reducer.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: null,
    currentOffer: null,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: null,
    offers: [],
    properties: [],
  });
});

it(`Reducer should increment change city by a given value`, () => {
  expect(reducer({
    city: null,
    currentOffer: null,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: null,
    offers: [],
    properties: [],
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Voronezh`,
  })).toEqual({
    city: `Voronezh`,
    currentOffer: null,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: null,
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
