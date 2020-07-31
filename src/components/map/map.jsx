import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import configireMap, {updateMarkers} from "./map-config.js";

import {getCurrentOffer} from "../../reducers/offers/selectors.js";

class Map extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }

  componentDidMount() {
    const {offers} = this.props;
    configireMap(offers);
  }

  componentDidUpdate() {
    const {offers, activeOffer} = this.props;
    updateMarkers(offers, activeOffer);
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
        cityName: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  activeOffer: PropTypes.number,
};

const mapStateToProps = (state) => ({
  activeOffer: getCurrentOffer(state),
});


export {Map};
export default connect(mapStateToProps)(Map);

