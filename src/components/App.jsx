import React from "react";
import Main from "./Main.jsx";
import PropTypes from 'prop-types';

const App = (props) => {
  const {offersCount, captions} = props;
  return <React.Fragment>
    <Main
      offersCount={offersCount}
      captions={captions}
    />
  </React.Fragment>;
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  captions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default App;
