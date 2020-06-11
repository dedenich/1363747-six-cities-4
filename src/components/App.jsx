import React from "react";
import Main from "./Main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offersCount} = props;
  return <React.Fragment>
    <Main
      offersCount={offersCount}
    />
  </React.Fragment>;
};

export default App;
