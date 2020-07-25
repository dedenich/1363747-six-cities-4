import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

import {getCurrentCity, getOffers} from "../../reducers/offers/selectors.js";

import {AppRoute} from "../../const.js";

const CitiesListWrapped = withActiveItem(CitiesList);
const OffersListWrapped = withActiveItem(OffersList);

class Main extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {offers, handleClick, city} = this.props;
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

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesListWrapped/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found" onClick={handleClick}>{offersCount} places to stay in {city}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                {offers ? <OffersListWrapped offers={offers}/> : ``}
              </section>
              <div className="cities__right-section">
                <section className="cities__map map" id="map">
                  <Map offers={offers}/>
                </section>
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
  handleClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  city: getCurrentCity(state),
  onHeadingClick: state.onHeadingClick,
});


export {Main};
export default connect(mapStateToProps)(Main);
