import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import history from "../../history.js";
import {AppRoute, AuthorizationStatus} from "../../const.js";

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

  render() {
    const {authorizationStatus} = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT} render={() => <Main/>}/>
          <Route exact path={AppRoute.SING_IN} render={() => {
            if (authorizationStatus === AuthorizationStatus.AUTH) {
              return null;
            }
            return <Redirect to={AppRoute.ROOT} />;
          }}/>
          <Route exact path={AppRoute.FAVORITES}/>
          <Route exact path={AppRoute.ROOM}/>

        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  currentOffer: PropTypes.string,
  onLoadOffers: PropTypes.func,
  authorizationStatus: PropTypes.string,
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
