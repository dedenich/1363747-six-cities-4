const Types = [
  `Apartment`,
  `Private Room`,
  `House`,
  `Hotel`,
];

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const AppRoute = {
  ROOT: `/`,
  SING_IN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id`,
};

const SortingTypes = {
  POPULAR: `Popular`,
  PRICE_ASCENDING: `Price: low to high`,
  PRICE_DESCENDING: `Price: high to low`,
  RATING_DESCENDING: `Top rated first`,
};

export {
  Types,
  AuthorizationStatus,
  AppRoute,
  SortingTypes
};
