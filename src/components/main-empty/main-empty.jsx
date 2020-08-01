import React from "react";
import PropTypes from 'prop-types';

const MainEmpty = (props) => (
  <section className="cities__no-places">
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">We could not find any property availbale at the moment in {props.city}</p>
    </div>
  </section>
);

MainEmpty.propTypes = {
  city: PropTypes.string.isRequired,
};

export default MainEmpty;
