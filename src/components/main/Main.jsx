import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import Sorting from "../sorting/sorting.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";

import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import withInitialState from "../../hocs/with-initial-state/with-initial-state.jsx";

import {getCurrentCity, getOffers, getCurrentCityOffers} from "../../reducers/offers/selectors.js";

import {AppRoute} from "../../const.js";

const CitiesListWrapped = withActiveItem(CitiesList);
const OffersListWrapped = withActiveItem(OffersList);
const SortingWrapped = withInitialState(Sorting);

class Main extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {offers, handleClick, city, currentCityOffers} = this.props;
    const offersCount = offers.length;
    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.SING_IN}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className={`page__main page__main--index ${!offersCount ? `page__main--index-empty` : ``}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesListWrapped/>
            </section>
          </div>
          <div className="cities">
            <div className={`cities__places-container container ${!offersCount ? `cities__places-container--empty` : ``}`}>
              {!offersCount ?
                <MainEmpty city={city}/>
                :
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found" onClick={handleClick}>{offersCount} places to stay in {city}</b>
                  <SortingWrapped/>
                  {currentCityOffers && <OffersListWrapped offers={currentCityOffers}/>}
                </section>}
              <div className="cities__right-section">
                {offersCount &&
                <section className="cities__map map" id="map">
                  <Map offers={offers}/>
                </section>}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  city: PropTypes.string,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
        cityName: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  currentCityOffers: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
        cityName: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  handleClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  currentCityOffers: getCurrentCityOffers(state),
  city: getCurrentCity(state),
  onHeadingClick: state.onHeadingClick,
});


export {Main};
export default connect(mapStateToProps)(Main);
