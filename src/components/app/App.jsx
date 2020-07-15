import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import PropertyScreen from "../property-screen/property-screen.jsx";
import Main from "../main/Main.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentOffer: null,
    };

    this.handleHeadingClick = this.handleHeadingClick.bind(this);
  }

  handleHeadingClick(item) {
    return this.setState({currentOffer: item});
  }

  _renderApp() {
    const {offers,
      currentOffer,
      city,
      allOffers
    } = this.props;

    let cities = new Set(allOffers.map((it) => (it.city)));
    const offersCount = offers.length;
    if (currentOffer !== null) {
      return (
        <PropertyScreen/>
      );
    } else {
      return (
        <Main
          city={city}
          offersCount={offersCount}
          offers={offers}
          onHeadingClick={this.handleHeadingClick}
          cities={[...cities]}
        />
      );
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/offer">
            <PropertyScreen/>
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
  city: PropTypes.string,
};

const mapStateToProps = (state) => ({
  currentOffer: state.currentOffer,
  offers: state.offers,
  allOffers: state.allOffers,
  city: state.city,
});


export {App};
export default connect(mapStateToProps)(App);
