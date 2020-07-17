import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

class CitiesList extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {handleActiveChange, onCityClick, activeItem, cities} = this.props;
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {!cities ? `` : [...cities].map((it, i) => (
            <li className="locations__item" key={it + i} onClick={onCityClick}>
              <a className={`locations__item-link tabs__item ${it === activeItem ? `tabs__item--active` : ``}`} href="#">
                <span onClick={handleActiveChange}>{it}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

CitiesList.propTypes = {
  cities: PropTypes.object,
  activeItem: PropTypes.string,
  handleActiveChange: PropTypes.func,
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
  cities: state.cities,
});


const mapDispatchToProps = (dispatch) => ({
  onCityClick(e) {
    dispatch(ActionCreator.changeCity(e.target.textContent));
    dispatch(ActionCreator.getOffers(e.target.textContent));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
