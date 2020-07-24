import {extend, getOffersIn, updateOffer, removeFromFavorites} from '../../utils.js';
import convertOffer from '../../adapters/offer.js';

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  GET_OFFERS_IN: `GET_OFFERS_IN`,
  GET_CITIES: `GET_CITIES`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  UPDATE_OFFER: `UPDATE_OFFER`,
  REMOVE_FROM_FAVORITES: `REMOVE_FROM_FAVORITES`,

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

  updateOffer: (editedOffer) => ({
    type: ActionType.UPDATE_OFFER,
    payload: editedOffer,
  }),

  removeFromFavorites: (id) => ({
    type: ActionType.REMOVE_FROM_FAVORITES,
    payload: id,
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

  addToFavorites: (offerId) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offerId}/1`)
    .then((response) => {
      const editedOffer = convertOffer(response.data);

      dispatch(ActionCreator.updateOffer(editedOffer));
    })
    .catch((error) => {
      throw error;
    });
  },

  removeFromFavorites: (offerId) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offerId}/0`)
    .then((response) => {
      const editedOffer = convertOffer(response.data);

      dispatch(ActionCreator.updateOffer(editedOffer));
      dispatch(ActionCreator.removeFromFavorites(offerId));
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
    case ActionType.UPDATE_OFFER:
      return extend(state, {
        offers: updateOffer(state.offers, action.payload),
      });
    case ActionType.REMOVE_FROM_FAVORITES:
      return extend(state, {
        favoritesOffers: removeFromFavorites(state.favoritesOffers, action.payload),
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
