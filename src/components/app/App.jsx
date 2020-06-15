import React from "react";
import Main from "../main/Main.jsx";
import PropTypes from 'prop-types';

const App = (props) => {
  const {offersCount, captions} = props;
  return <Main
    offersCount={offersCount}
    captions={captions}
  />;
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  captions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default App;
