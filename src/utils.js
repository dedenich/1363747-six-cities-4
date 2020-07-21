export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const updateOffer = (offers, editedOffer) => {

  return offers.map((offer) => {
    if (offer.id === editedOffer.id) {
      return editedOffer;
    }
    return offer;
  });
};

export const getOffersIn = (city, offers) => (offers.filter((it) => it.city.name === city));

export const removeFromFavorites = (favoriteOffers, offerId) => {
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
