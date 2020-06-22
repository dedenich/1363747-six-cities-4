import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App.jsx";
import offers from "./mocks/offers.js";

ReactDOM.render(
    <App
      offersCount={23}
      offers={offers}
    />,
    document.getElementById(`root`)
);
