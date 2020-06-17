import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App.jsx";

ReactDOM.render(
    <App
      offersCount={23}
      captions={[
        `Beautiful & luxurious apartment at great location`,
        `Wood and stone place`,
        `Canal View Prinsengracht`,
        `Nice, cozy, warm big bed apartment`]}
    />,
    document.getElementById(`root`)
);
