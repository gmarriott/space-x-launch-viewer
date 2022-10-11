import React from "react";
import cx from "classnames";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const Select = ({ label, classes, error, allowDisabledState }) => {
  const { setFilter, filter, items } = useLaunchContext();
  let years = [];
  const selectClasses = cx(classes, {
    disabled: allowDisabledState ? error : "",
  });

  const yearsList = () => {
    items.map((x, y) => {
        years.push(new Date(x.date_utc).getFullYear());
    })

    return [...new Set(years)];
  }

  years = yearsList();

  return (
    <select
      name={label}
      className={selectClasses}
      onChange={(event) => {
        setFilter(event.target.value);
      }}
      value={filter}
    >
        <option value="">{label}</option>
        {
        years.map( (x,y) =>
            <option key={y}>{x}</option>
        )}
    </select>
  );
};
