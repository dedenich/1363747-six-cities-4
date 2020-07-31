import {SortingTypes} from './const.js';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const updateOffer = (offers, editedOffer) => {

  return offers.map((offer) => {
    if (offer.id === editedOffer.id) {
      return editedOffer;
    }
    return offer;
  });
};

const getOffersIn = (city, offers) => (offers.filter((it) => it.city.name === city));

const removeFromFavorites = (favoriteOffers, offerId) => {
  return favoriteOffers.reduce((acc, item) => {
    const newOffers = item.offers.filter((offer) => offer.id !== offerId);

    if (newOffers.length !== 0) {
      return [
        ...acc,
        {cityName: item.cityName, offers: newOffers}
      ];
    }
    return acc;
  }, []);
};

const sortOffers = (offers, sortingType) => {
  const offersCopy = offers.slice();

  switch (sortingType) {
    case SortingTypes.POPULAR:
      return offersCopy;
    case SortingTypes.PRICE_ASCENDING:
      return offersCopy.sort((a, b) => a.price - b.price);
    case SortingTypes.PRICE_DESCENDING:
      return offersCopy.sort((a, b) => b.price - a.price);
    case SortingTypes.RATING_DESCENDING:
      return offersCopy.sort((a, b) => b.rating - a.rating);
    default:
      return offersCopy;
  }
};

export {
  extend,
  updateOffer,
  getOffersIn,
  removeFromFavorites,
  sortOffers
};
