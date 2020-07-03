import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropertyScreen from "../property-screen/property-screen.jsx";
import Main from "../main/Main.jsx";
import mockProperties from "../../mocks/properties.js";

export default class App extends PureComponent {
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
    const {currentOffer} = this.state;
    const {offersCount, offers} = this.props;
    const properties = mockProperties;
    if (currentOffer !== null) {
      return (
        <PropertyScreen
          photos={properties.photos}
          heading={properties.heading}
          describtion={properties.describtion}
          premium={properties.premium}
          type={properties.type}
          rating={properties.rating}
          bedroomsNumber={properties.bedroomsNumber}
          maxGuests={properties.maxGuests}
          price={properties.price}
          list={properties.list}
          host={properties.host}
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
    const properties = mockProperties;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/offer">
            <PropertyScreen
              photos={properties.photos}
              heading={properties.heading}
              describtion={properties.describtion}
              premium={properties.premium}
              type={properties.type}
              rating={properties.rating}
              bedroomsNumber={properties.bedroomsNumber}
              maxGuests={properties.maxGuests}
              price={properties.price}
              list={properties.list}
              host={properties.host}
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
