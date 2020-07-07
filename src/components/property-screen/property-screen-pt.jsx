import PropTypes from 'prop-types';
import TYPES from '../../const.js';

const pt = {
  offer: PropTypes.shape({
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    heading: PropTypes.string.isRequired,
    describtion: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(TYPES).isRequired,
    rating: PropTypes.number.isRequired,
    bedroomsNumber: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      superStatus: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};

export default pt;
