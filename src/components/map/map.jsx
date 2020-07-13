import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import configireMap, {updateMarkers} from "./map-config.js";

export default class Map extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="cities__map map" id="map"></section>
    );
  }

  componentDidMount() {
    const {places} = this.props;
    configireMap(places);
  }

  componentDidUpdate() {
    const {places} = this.props;
    updateMarkers(places);
  }
}

Map.propTypes = {
  places: PropTypes.arrayOf(PropTypes.array).isRequired,
};
