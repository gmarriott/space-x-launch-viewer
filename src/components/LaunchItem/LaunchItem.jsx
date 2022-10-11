import React from "react";
import Moment from "moment";

export const LaunchItem = ({ item, index }) => {

  const { flight_number, name, date_utc, rocket_name } = item;

  return (
    <li key={index} className="launch-item">
      <div>
        <span className="flight-number">{`#${flight_number}`}</span>
        <span className="flight-name">{`${name}`}</span>
      </div>
      <div className="end-container">
        <span className="item-details">
          <span className="launch-date">{new Moment(date_utc).format("Do MMMM YYYY")}</span>
          <span className="rocket-name">{rocket_name}</span>
        </span>
      </div>
    </li>
  );
};
