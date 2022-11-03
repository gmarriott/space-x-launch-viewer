import React, { MouseEventHandler } from 'react';
import Moment from 'moment';
import classNames from 'classnames';
import { MdArrowDropDown } from 'react-icons/md';
import { LaunchInformation } from '../LaunchInformation';

interface LaunchItemProps {
  index: number;
  activeId: number | undefined;
  onClick: MouseEventHandler<HTMLLIElement>;
  flight_number: number;
  name: string;
  date_utc: string;
  rocket_name: string;
  launch_success: boolean;
  details: string;
  article: string;
}

export const LaunchItem = ({
  index,
  activeId,
  onClick,
  flight_number,
  name,
  date_utc,
  rocket_name,
  launch_success,
  details,
  article,
}: LaunchItemProps) => {
  if (name.length > 25) {
    name = name.substring(0, 25) + '...';
  }

  return (
    <div>
      <li
        key={index}
        onClick={onClick}
        className={classNames('launch-item', {
          active: activeId === index,
        })}
      >
        <div>
          <span className="flight-number">{`#${flight_number}`}</span>
          <span className="flight-name">{`${name}`}</span>
        </div>
        <div className="end-container">
          <span className="item-details">
            <span className="launch-date">
              {Moment(date_utc).format('Do MMMM YYYY')}
            </span>
            <span className="rocket-name">{rocket_name}</span>
          </span>
          <div>
            <MdArrowDropDown
              className={classNames('expand-icon', {
                active: activeId === index,
              })}
            />
          </div>
        </div>
      </li>
      {activeId === index && (
        <LaunchInformation
          className={classNames('launch-details', {
            active: activeId === index,
          })}
          launch_success={launch_success}
          details={details}
          article={article}
        />
      )}
    </div>
  );
};
