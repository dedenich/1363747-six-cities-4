import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const CitiesList = (props) => {
  const {allOffers, onCityClick} = props;
  let cities = new Set(allOffers.map((it) => (it.city)));
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

CitiesList.propTypes = {
  onCityClick: PropTypes.func,
  allOffers: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired
  ),
};


const mapStateToProps = (state) => ({
  onCityClick: state.onCityClick,
  allOffers: state.allOffers,
});


const mapDispatchToProps = (dispatch) => ({
  onCityClick(e) {
    dispatch(ActionCreator.changeCity(e.target.textContent));
    dispatch(ActionCreator.getOffers(e.target.textContent));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
