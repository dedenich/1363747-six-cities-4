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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});

    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: getOffersIn(action.payload, state.allOffers)
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
