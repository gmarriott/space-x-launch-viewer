import React from "react";
import Moment from 'moment';
import { LaunchItem } from "../LaunchItem";

export const LaunchList = ({ items, filter, sort, hasError, loading }) => {
  let filteredItems = [...items];

  let launches = filteredItems.sort((a, b) => {
    const x = new Moment(a.date_utc).format('YYYYMMDD');
    const y = new Moment(b.date_utc).format('YYYYMMDD');
    return sort ? y - x : x - y;
  });

  if (filter !== "") {
    launches = launches.filter((launch) => {
        let launchYear = new Moment(launch.date_utc).format('YYYY');
        return launchYear === filter;
    })
  }

  if (hasError) {
    return (
        <span className="launch-list-error-msg">
          <p>Error requesting data from the SpaceX API.</p>
        </span>
    )
  }

  if (loading) {
    return (
          <div className="loader">
            <div className="lds-dual-ring"></div>
          </div>
    )
  }

  return (
    <ul className="launch-list">
      {launches.map((item, index) => {
        return <LaunchItem key={index} item={item} index={index} />;
      })}
    </ul>
  );
};
