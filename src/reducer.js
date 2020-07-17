import {extend, getOffersIn} from './utils.js';
import offers from './mocks/offers.js';
import properties from './mocks/properties.js';

const initialState = {
  city: null,
  currentOffer: null,
  allOffers: offers,
  offers,
  properties
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  GET_CITIES: `GET_CITIES`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: city,
  }),

  getCities: () => ({
    type: ActionType.GET_CITIES,
    payload: null,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});

    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: getOffersIn(action.payload, state.allOffers),
      });

    case ActionType.GET_CITIES:
      return extend(state, {
        cities: new Set(state.allOffers.map((it) => (it.city))),
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
