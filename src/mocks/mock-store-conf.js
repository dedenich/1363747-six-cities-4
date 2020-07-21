
import NameSpace from '../reducers/namespace.js';
import {AuthorizationStatus} from "../const.js";
// import mockOffersList from "./offers.js";

const mockOffersList = [
  {
    caption: `Capion 1`,
    src: `https://path`,
    price: 100,
    coordinates: [1, 3]
  },
  {
    caption: `Capion 2`,
    src: `https://path`,
    price: 160,
    coordinates: [1, 3]
  },
  {
    caption: `Capion 3`,
    src: `https://path`,
    price: 90,
    coordinates: [1, 3]
  },
];

export default {
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  },
  [NameSpace.OFFERS]: {
    offers: mockOffersList,
    cities: new Set([`1`, `2`]),
    currentCity: `Brussels`,
  },
};
