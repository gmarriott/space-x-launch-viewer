import React from 'react';
import cx from 'classnames';
import { useLaunchContext } from '../../contexts/LaunchContext';

interface SelectProps {
  label: string;
  classes: string;
  error: boolean;
  allowDisabledState: boolean;
}

export const Select = ({
  label,
  classes,
  error,
  allowDisabledState,
}: SelectProps) => {
  const { setFilter, filter, items } = useLaunchContext();
  let years: string[] = [];
  const selectClasses = cx(classes, {
    disabled: allowDisabledState ? error : '',
  });

  const yearsList = () => {
    items.map((x, y) => {
      const launchDate = x['date_utc'];
      return years.push(
        new Date(launchDate).getFullYear().toString()
      );
    });

    return [...new Set(years)];
  };

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
      {years.map((x, y) => (
        <option key={y}>{x}</option>
      ))}
    </select>
  );
};
