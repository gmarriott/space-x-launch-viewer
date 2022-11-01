import React from 'react';
import CONSTANTS from '../../constants/Config';
import LABEL from '../../constants/Labels';
import { Button } from '../Button';
import { useLaunchContext } from '../../contexts/LaunchContext/LaunchContext';

export const Header = () => {
  const { listLaunches } = useLaunchContext();
  return (
    <header className="app__header">
      <div className="app__logo">
        <img
          src={CONSTANTS.LOGO}
          className="app__logo-image"
          alt=""
        />
        <span className="app__logo-txt">{LABEL.LAUNCHES}</span>
      </div>
      <Button
        onClick={() => listLaunches()}
        classes="button button--reload"
        label={LABEL.RELOAD}
      />
    </header>
  );
};
