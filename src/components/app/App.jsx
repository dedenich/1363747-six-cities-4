import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";

import history from "../../history.js";
import {AppRoute} from "../../const.js";

import Main from "../main/Main.jsx";
import PropertyScreen from "../property-screen/property-screen.jsx";
import LoginScreen from "../login-screen/login-screen.jsx";

import withAuthForm from "../../hocs/with-auth-form/with-auth-form.jsx";

import {Operation as OfferOperation} from "../../reducers/offers/offers.js";
import {Operation as UserOperation} from "../../reducers/user/user.js";

import {getCurrentOffer} from "../../reducers/offers/selectors.js";

const LoginScreenWrapped = withAuthForm(LoginScreen);

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
    const {onLoadOffers, onCheckAuth} = this.props;
    onLoadOffers();
    onCheckAuth();
  }

  render() {

    return (
      <Router history={history}>
        <Switch>
          <Route path={AppRoute.ROOT} component={Main} exact />
          <Route path={AppRoute.SING_IN} component={LoginScreenWrapped} exact />
          <Route path={AppRoute.FAVORITES} exact />
          <Route path={AppRoute.ROOM} exact component={PropertyScreen}/>

        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  currentOffer: PropTypes.number,
  onLoadOffers: PropTypes.func,
  onCheckAuth: PropTypes.func,
  authorizationStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  currentOffer: getCurrentOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffers() {
    dispatch(OfferOperation.loadOffers());
  },
  onCheckAuth() {
    dispatch(UserOperation.checkAuth());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
