import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import configireMap, {updateMarkers} from "./map-config.js";

export class Map extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="cities__map map" id="map"></section>
    );
  }

  componentDidMount() {
    const {offers} = this.props;
    const places = offers.map((it) => (it.coordinates));
    configireMap(places);
  }

  componentDidUpdate() {
    const {offers} = this.props;
    const places = offers.map((it) => (it.coordinates));
    updateMarkers(places);
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
        city: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export default connect(mapStateToProps)(Map);
