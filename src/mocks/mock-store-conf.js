
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


const mockReviews = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`
    }
  },
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`
    }
  }
];

export default {
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  },
  [NameSpace.OFFERS]: {
    offers: mockOffersList,
    cities: new Set([`1`, `2`]),
    currentCity: `Brussels`,
    rewiews: mockReviews,
    sortingType: `Popular`,
  },
};
