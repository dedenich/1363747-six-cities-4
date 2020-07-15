import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const CitiesList = (props) => {
  const {cities, onCityClick} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((it, i) => (
          <li className="locations__item" key={it + i} onClick={onCityClick}>
            <a className="locations__item-link tabs__item" href="#">
              <span>{it}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityClick: PropTypes.func,
};


const mapStateToProps = (state) => ({
  onCityClick: state.onCityClick,
});


const mapDispatchToProps = (dispatch) => ({
  onCityClick(e) {
    dispatch(ActionCreator.changeCity(e.target.textContent));
    dispatch(ActionCreator.getOffers(e.target.textContent));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
