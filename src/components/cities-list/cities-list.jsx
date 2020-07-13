import React from "react";
import PropTypes from 'prop-types';

const CitiesList = (props) => {
  const {cities, onCityClick} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {[...cities].map((it, i) => (
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

export default CitiesList;

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityClick: PropTypes.func,
};
