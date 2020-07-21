import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";

import PropertyScreen from "../property-screen/property-screen.jsx";
import Main from "../main/Main.jsx";

import {Operation as OfferOperation} from "../../reducers/offers/offers.js";

import {getCurrentOffer} from "../../reducers/offers/selectors.js";

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

  componentDidMount() {
    const {onLoadOffers} = this.props;
    onLoadOffers();
  }

  _renderApp() {
    const {
      currentOffer,
    } = this.props;
    if (currentOffer !== null) {
      return (
        <PropertyScreen/>
      );
    } else {
      return (
        <Main/>
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
  currentOffer: PropTypes.string,
  onLoadOffers: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentOffer: getCurrentOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffers() {
    dispatch(OfferOperation.loadOffers());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
