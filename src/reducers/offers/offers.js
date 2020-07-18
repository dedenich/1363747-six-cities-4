import {extend, getOffersIn} from '../../utils.js';
import convertOffer from '../../adapters/offer.js';

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  GET_OFFERS_IN: `GET_OFFERS_IN`,
  GET_CITIES: `GET_CITIES`,
  LOAD_OFFERS: `LOAD_OFFERS`,
};

const initialState = {
  city: null,
  currentOffer: null,
  offers: [],
  properties: [],
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  getOffersIn: (city) => ({
    type: ActionType.GET_OFFERS_IN,
    payload: city,
  }),

  getCities: () => ({
    type: ActionType.GET_CITIES,
    payload: null,
  }),

  loadOffers: (loadedOffers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: loadedOffers,
  }),
};

const Operation = {

  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
    .then((response) => {
      const convertedOffers = response.data.map(convertOffer);
      dispatch(ActionCreator.loadOffers(convertedOffers));
      dispatch(ActionCreator.getCities());
    })
    .catch((error) => {
      throw error;
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});

    case ActionType.GET_OFFERS_IN:
      return extend(state, {
        offers: getOffersIn(action.payload, state.offers),
      });

    case ActionType.GET_CITIES:
      return extend(state, {
        cities: new Set(state.offers.map((it) => (it.city.name))),
      });

    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
