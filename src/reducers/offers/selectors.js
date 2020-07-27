import NameSpace from '../namespace.js';

const NAME_SPACE = NameSpace.OFFERS;

const getCities = (state) => state[NAME_SPACE].cities;
const getCurrentCity = (state) => state[NAME_SPACE].city;
const getOffers = (state) => state[NAME_SPACE].offers;
const getOffersNearby = (state) => state[NAME_SPACE].offersNearby;
const getReviews = (state) => state[NAME_SPACE].reviews;
const getCurrentOffer = (state) => state[NAME_SPACE].currentOffer;

export {
  getCities,
  getCurrentCity,
  getOffers,
  getCurrentOffer,
  getReviews,
  getOffersNearby,
};
