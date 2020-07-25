import React, {PureComponent} from "react";
import {connect} from "react-redux";
import pt from "./property-screen-pt.jsx";
import ReviewList from "../review-list/review-list.jsx";
import mockProps from "../../mocks/properties.js";

import Map from "../map/map.jsx";
import OffersList from "../offers-list/offers-list.jsx";

import {Operation as OfferOperation} from "../../reducers/offers/offers.js";
import {getOffersNearby} from "../../reducers/offers/selectors.js";

class PropertyScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onloadOffersNearby} = this.props;
    onloadOffersNearby();
  }

  render() {
    const {offersNearby} = this.props;
    let propers;
    if (this.props.offer !== undefined) {
      propers = this.props.offer;
    } else {
      propers = mockProps;
    }
    const {photos, heading, describtion, premium, type, rating, bedroomsNumber, maxGuests, price, list, host} = propers;
    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {photos.map((it, i) => (
                  <div key={`image-${i}`} className="property__image-wrapper">
                    <img className="property__image" src={it} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  {premium ? <span>Premium</span> : null}
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {heading}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `80%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedroomsNumber} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxGuests} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">€{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {list.map((item, i) => (
                      <li key={`list-item-${i}`} className="property__inside-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    { host.superStatus ? null : <style>{`#HostAvatar:after {display: none}`}</style> }
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper" id="HostAvatar">
                      <img className="property__avatar user__avatar" src={host.avatar} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {describtion}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewList/>
                  <form className="reviews__form form" action="#" method="post">
                    <label className="reviews__label form__label" htmlFor="review">Your review</label>
                    <div className="reviews__rating-form form__rating">
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" />
                      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" />
                      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" />
                      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" />
                      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" />
                      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                    </div>
                    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} />
                    <div className="reviews__button-wrapper">
                      <p className="reviews__help">
                        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                      </p>
                      <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
            <section className="property__map map">
              {offersNearby ? <Map offers={offersNearby}/> : ``}
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              {offersNearby ? <OffersList offers={offersNearby}/> : ``}
            </section>
          </div>
        </main>
      </div>
    );
  }
}

PropertyScreen.propTypes = pt;

const mapStateToProps = (state) => ({
  offer: state.properties,
  offersNearby: getOffersNearby(state),
});

const mapDispatchToProps = (dispatch) => ({
  onloadOffersNearby() {
    //  пока не определена логика, поиск для отеля с id 3
    dispatch(OfferOperation.loadOffersNearby(3));
  },
});

export {PropertyScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyScreen);
