export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersIn = (city, offers) => (offers.filter((it) => it.city.name === city));
