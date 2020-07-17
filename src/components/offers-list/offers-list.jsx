import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import OfferCard from '../offer-card/offer-card.jsx';

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, handleChange, onHeadingClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((item, i) => (
          <OfferCard key={`card` + i}
            offer={item}
            handleChange={handleChange}
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
  handleChange: PropTypes.func,
  onCardHover: PropTypes.func,
  onHeadingClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  onHeadingClick: state.onHeadingClick,
});

export default connect(mapStateToProps)(OffersList);
