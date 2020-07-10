import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import configireMap from "./map-config.js";

export default class Map extends PureComponent {

  constructor(props) {
    super(props);
    this.places = this.props.places;
  }

  render() {
    return (
      <section className="cities__map map" id="map"></section>
    );
  }

  componentDidMount() {
    configireMap(this.places);
  }
}

Map.propTypes = {
  places: PropTypes.arrayOf(PropTypes.array).isRequired,
};
