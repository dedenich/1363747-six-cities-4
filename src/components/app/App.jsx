import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropertyScreen from "../property-screen/property-screen.jsx";
import Main from "../main/main.jsx";
import MockProperties from "../../mocks/properties.js";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentOffer: -1,
    };

    this.handleHeadingClick = this.handleHeadingClick.bind(this);
  }

  handleHeadingClick(item) {
    return this.setState({currentOffer: item});
  }

  _renderApp() {
    const {currentOffer} = this.state;
    const {offersCount, offers} = this.props;
    const {photos, heading, describtion, premium, type, rating, bedroomsNumber, maxGuests, price, list, host} = MockProperties;
    if (currentOffer !== -1) {
      return (
        <PropertyScreen
          photos={photos}
          heading={heading}
          describtion={describtion}
          premium={premium}
          type={type}
          rating={rating}
          bedroomsNumber={bedroomsNumber}
          maxGuests={maxGuests}
          price={price}
          list={list}
          host={host}
        />
      );
    } else {
      return (
        <Main
          offersCount={offersCount}
          offers={offers}
          onHeadingClick={this.handleHeadingClick}
        />
      );
    }
  }

  render() {
    const {photos, heading, describtion, premium, type, rating, bedroomsNumber, maxGuests, price, list, host} = MockProperties;
    // const {offersCount, offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/offer">
            <PropertyScreen
              photos={photos}
              heading={heading}
              describtion={describtion}
              premium={premium}
              type={type}
              rating={rating}
              bedroomsNumber={bedroomsNumber}
              maxGuests={maxGuests}
              price={price}
              list={list}
              host={host}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired
  ).isRequired,
};
