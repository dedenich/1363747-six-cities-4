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

export {
  Types,
  AuthorizationStatus,
  AppRoute
};
