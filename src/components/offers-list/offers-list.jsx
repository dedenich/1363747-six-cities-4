import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, handleActiveChange, onHeadingClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((item, i) => (
          <OfferCard key={`card` + i}
            offer={item}
            handleActiveChange={handleActiveChange}
            onHeadingClick={onHeadingClick}
          />
        ))}
      </div>
    );
  }
}


OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired
  ).isRequired,
  handleActiveChange: PropTypes.func,
  onCardHover: PropTypes.func,
  onHeadingClick: PropTypes.func,
};

export default OffersList;
