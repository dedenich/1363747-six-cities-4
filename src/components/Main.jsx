import React from "react";

const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offersCount} = props;
  return <div>
    <ul>
      <li></li>
    </ul>
    <div className="map"></div>
    <h2>{offersCount} places to stay in Amsterdam</h2>
    <ul>
      <li></li>
      <li></li>
    </ul>
  </div>;
};

export default Main;
