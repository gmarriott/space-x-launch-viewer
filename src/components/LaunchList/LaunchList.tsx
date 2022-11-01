import React from "react";
import Moment from "moment";
import { LaunchItem } from "../LaunchItem";

interface Launch {
  flight_number: number;
  name: string;
  date_utc: string;
  rocket_name: string;
}

interface LaunchListProps {
  launchItems: Launch[];
  filter: string;
  sort: boolean;
  hasError: boolean;
  loading: boolean;
}

export const LaunchList: React.FC<LaunchListProps> = ({
  launchItems,
  filter,
  sort,
  hasError,
  loading,
}) => {
  let filteredItems = [...launchItems];

  let launches = filteredItems.sort((a, b) => {
    const x = Moment(a.date_utc).format("YYYYMMDD");
    const y = Moment(b.date_utc).format("YYYYMMDD");
    return sort ? Number(y) - Number(x) : Number(x) - Number(y);
  });

  if (filter !== "") {
    launches = launches.filter((launch) => {
      let launchYear = Moment(launch.date_utc).format("YYYY");
      return launchYear === filter;
    });
  }

  if (hasError) {
    return (
      <span className="launch-list-error-msg">
        <p>Error requesting data from the SpaceX API.</p>
      </span>
    );
  }

  if (loading) {
    return (
      <div className="loader">
        <div className="lds-dual-ring"></div>
      </div>
    );
  }

  return (
    <ul className="launch-list">
      {launches.map((launch, index) => {
        return (
          <LaunchItem
            key={index}
            index={index}
            flight_number={launch.flight_number}
            name={launch.name}
            date_utc={launch.date_utc}
            rocket_name={launch.rocket_name}
          />
        );
      })}
    </ul>
  );
};
