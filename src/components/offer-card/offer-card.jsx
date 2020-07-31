import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import history from '../../history.js';

import {AuthorizationStatus, AppRoute} from "../../const.js";

import {Operation as OffersOperation, ActionCreator} from '../../reducers/offers/offers.js';

class OfferCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: props.offer.id
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const {handleOfferChange} = this.props;
    handleOfferChange(this.state.id);
  }

  render() {
    const {offer, onHeadingClick, authorizationStatus, onAddToFavorite,
      onRemoveFromFavorite} = this.props;
    const {caption, src, price} = offer;
    return (
      <article className="cities__place-card place-card" onMouseEnter={this.handleChange}>
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={src} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button button" type="button"
              onClick={() => {
                if (authorizationStatus !== AuthorizationStatus.AUTH) {
                  history.push(AppRoute.SING_IN);
                  return;
                }

                if (offer.isFavorite) {
                  onRemoveFromFavorite(offer.id);
                } else {
                  onAddToFavorite(offer.id);
                }
              }}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `80%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name" onClick={onHeadingClick}>
            <a href="#">{caption}</a>
          </h2>
          <p className="place-card__type">Apartment</p>
        </div>
      </article>
    );
  }
}

OfferCard.propTypes = {
  offer: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
  handleOfferChange: PropTypes.func.isRequired,
  onHeadingClick: PropTypes.func,
  onAddToFavorite: PropTypes.func,
  onRemoveFromFavorite: PropTypes.func,
  authorizationStatus: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  handleOfferChange(id) {
    dispatch(ActionCreator.changeActiveOffer(id));
  },
  onAddToFavorite(id) {
    dispatch(OffersOperation.addToFavorites(id));
  },
  onRemoveFromFavorite(id) {
    dispatch(OffersOperation.removeFromFavorites(id));
  },
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
