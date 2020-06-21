import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import OfferCard from '../offerCard/OfferCard.jsx';

export default class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };
  }

  handleCardHover(evt) {
    this.setState(() => ({activeCard: evt.target}));
  }

  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((item, i) => (
          <OfferCard key={`card` + i}
            offer={item}
            onCardHover={this.handleCardHover}
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
  onCardHover: PropTypes.func,
};
