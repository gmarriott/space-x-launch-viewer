import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  classes: string;
  label: string;
  onClick: MouseEventHandler;
}

export const Button = ({ classes, label, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={classes}>
      {label}
    </button>
  );
};
