import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PropertyScreen from "../property-screen/property-screen.jsx";
import Main from "../main/Main.jsx";
import mockProperties from "../../mocks/properties.js";
import pt from './../property-screen/property-screen-pt.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentOffer: null,
    };

    this.handleHeadingClick = this.handleHeadingClick.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleHeadingClick(item) {
    return this.setState({currentOffer: item});
  }

  handleCityClick(city) {
    const {onCityClick} = this.props;
    onCityClick(city);
  }

  _renderApp() {
    const {offers,
      currentOffer,
      properties,
      onCityClick,
      city,
      allOffers
    } = this.props;

    let cities = new Set(allOffers.map((it) => (it.city)));
    const offersCount = offers.length;
    if (currentOffer !== null) {
      return (
        <PropertyScreen
          offer={properties}
        />
      );
    } else {
      return (
        <Main
          city={city}
          offersCount={offersCount}
          offers={offers}
          onHeadingClick={this.handleHeadingClick}
          onCityClick={onCityClick}
          cities={[...cities]}
        />
      );
    }
  }

  render() {
    const properties = mockProperties;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/offer">
            <PropertyScreen
              offer={properties}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  allOffers: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired
  ),
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired
  ).isRequired,
  currentOffer: PropTypes.string,
  properties: pt,
  onCityClick: PropTypes.func.isRequired,
  city: PropTypes.string,
};

const mapStateToProps = (state) => ({
  currentOffer: state.currentOffer,
  offers: state.offers,
  allOffers: state.allOffers,
  properties: state.properties,
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(e) {
    dispatch(ActionCreator.changeCity(e.target.textContent));
    dispatch(ActionCreator.getOffers(e.target.textContent));
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
