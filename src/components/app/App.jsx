import React from "react";
import Main from "../main/Main.jsx";
import PropTypes from 'prop-types';

const App = (props) => {
  const {offersCount, offers} = props;
  return <Main
    offersCount={offersCount}
    offers={offers}
  />;
};

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

export default App;
