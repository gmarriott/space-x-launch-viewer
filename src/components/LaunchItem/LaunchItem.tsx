import React from "react";
import Moment from "moment";

interface LaunchItemProps {
  index: number;
  flight_number: number;
  name: string;
  date_utc: string;
  rocket_name: string;
}

export const LaunchItem: React.FC<LaunchItemProps> = ({
  index,
  flight_number,
  name,
  date_utc,
  rocket_name,
}) => {
  return (
    <li key={index} className="launch-item">
      <div>
        <span className="flight-number">{`#${flight_number}`}</span>
        <span className="flight-name">{`${name}`}</span>
      </div>
      <div className="end-container">
        <span className="item-details">
          <span className="launch-date">
            {Moment(date_utc).format("Do MMMM YYYY")}
          </span>
          <span className="rocket-name">{rocket_name}</span>
        </span>
      </div>
    </li>
  );
};
